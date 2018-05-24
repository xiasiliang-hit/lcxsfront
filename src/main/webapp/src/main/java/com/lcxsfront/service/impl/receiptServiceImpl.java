package com.lcxsfront.service.impl;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Service;

import com.lcxsfront.mapper.caseBeanMapper;
import com.lcxsfront.mapper.inviBeanMapper;
import com.lcxsfront.mapper.productBeanMapper;
import com.lcxsfront.mapper.receiptBeanMapper;
import com.lcxsfront.mapper.shopBeanMapper;
import com.lcxsfront.mapper.userBeanMapper;
import com.lcxsfront.mapper.userReceiptBeanMapper;
import com.lcxsfront.mapper.userRedBeanMapper;
import com.lcxsfront.model.Time;
import com.lcxsfront.model.caseBean;
import com.lcxsfront.model.frontBean;
import com.lcxsfront.model.indexUser;
import com.lcxsfront.model.inviBean;
import com.lcxsfront.model.invitationBean;
import com.lcxsfront.model.productBean;
import com.lcxsfront.model.productMessageBean;
import com.lcxsfront.model.receiptBean;
import com.lcxsfront.model.userBean;
import com.lcxsfront.model.userFriendReceiptBean;
import com.lcxsfront.model.userReceiptBean;
import com.lcxsfront.model.userRedBean;
import com.lcxsfront.service.IReceiptService;
@Service
public class receiptServiceImpl implements IReceiptService{

	@Resource
	private receiptBeanMapper reMapper;
	@Resource
	private shopBeanMapper shopMapper;
	@Resource
	private caseBeanMapper caseMapper;
	@Resource
	private productBeanMapper proMapper;
	@Resource
	private userReceiptBeanMapper urMapper;
	@Resource
	private userRedBeanMapper userRedMapper;
	@Resource
	private userBeanMapper userMapper;
	@Resource
	private inviBeanMapper inviMapper;
	

	@Override
	public void queryUser(HttpServletResponse response) {
		List<Object> user = reMapper.qeuryUser();
		try {
			int num=user.size()*12;
			double ff=num*1888;
			double dd=ff/0.0196;
			int shopNum=shopMapper.queryAllShop();
			indexUser u=new indexUser();
			u.setDd(dd);
			u.setFf(ff);
			u.setNum(num);
			u.setShopNum(shopNum);
			String json = JSONArray.fromObject(u).toString(); 
			response.setHeader("Cache-Control", "no-cache");
			response.setContentType("text/json; charset=utf-8");
			response.getWriter().print(json);
			response.getWriter().flush(); 
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Override
	public void queryProductByPid(HttpServletResponse response,Long pid) {
		productMessageBean product = shopMapper.queryProductByPid(pid);
		product.setCtime(product.getCtime().substring(0,10));
		Object num = reMapper.queryNumByProductId(pid);
		if(num==null || "".equals(num)){
			num=String.valueOf("0");
		}
		product.setPeople(product.getPeople()+Long.valueOf(String.valueOf(num)));
		try {
			String json = JSONArray.fromObject(product).toString();         
			response.setHeader("Cache-Control", "no-cache");
			response.setContentType("text/json; charset=utf-8");
			response.getWriter().print(json);
			response.getWriter().flush(); 
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	}

	@Override
	public void queryCaseByPid(HttpServletResponse response, Long pid) {
		List<caseBean> cas = caseMapper.queryCaseByPid(pid);
		for (int i = 0; i < cas.size(); i++) {
			String[] bb = cas.get(i).getDtime().split("天");
			cas.get(i).setQx(bb[0]);
		}
		try {
			String json = JSONArray.fromObject(cas).toString();         
			response.setHeader("Cache-Control", "no-cache");
			response.setContentType("text/json; charset=utf-8");
			response.getWriter().print(json);
			response.getWriter().flush(); 
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	}

	@Override
	public void addReceipt(HttpServletResponse response,receiptBean receipt) {
		response.setHeader("Content-type", "text/html;charset=UTF-8");  
		PrintWriter pw = null;
		String json="";
		Long rid=Time.getId();
		userBean user = userMapper.selectByPrimaryKey(receipt.getRid());
		if(user.getAlipay()==null || "".equals(user.getAlipay()) || user.getRealname()==null || "".equals(user.getRealname())){
			try {
				pw=response.getWriter();
				json="{'code':'2'}";
				pw.print(json);
				pw.flush();
				pw.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}else{
			Object tmoney =userMapper.queryTMoneyByVid(receipt.getRid());
			double money;
			if(tmoney==null || "".equals(tmoney)){
				money=Double.valueOf(String.valueOf("0"));
			}else{
				money=Double.valueOf(String.valueOf(tmoney));
			}
			List<userRedBean> list = userRedMapper.queryRedByVid(receipt.getRid());
			userReceiptBean ur=new userReceiptBean(receipt.getRid(), rid);
			urMapper.insert(ur);
			receipt.setRid(rid);
			caseBean cas = caseMapper.selectByPrimaryKey(receipt.getCaseid());
			String[] dd = cas.getDtime().split("天");
			cas.setDtime(dd[0]);
			if(cas.getCid()==1){
				receipt.setJmoney(Double.parseDouble(String.valueOf(cas.getExperience())));
			}else{
				receipt.setJmoney(cas.getExperience()/100*receipt.getTmoney());
			}
			productBean pro = proMapper.selectByPid(receipt.getProductid());
			pro.setPeople(pro.getPeople()+9);
			proMapper.updateByPrimaryKeySelective(pro);
			receipt.setChannel(pro.getChannel());
			receipt.setCtime(Time.getTime());
			receipt.setStatus(3);
			for (int i = 0; i < list.size(); i++) {
				if(list.get(i).getRedname().indexOf("新手红包")!=-1 && receipt.getTmoney()>=10000 && Integer.valueOf(cas.getDtime())>=30){
					receipt.setRedmoney(list.get(i).getRedmoney());
					receipt.setRedid(list.get(i).getRedid());
					list.get(i).setType("1");
					userRedMapper.updateByPrimaryKeySelective(list.get(i));
					break;
				}else if(list.get(i).getRedname().indexOf("累计")!=-1 && money>list.get(i).getRedcondition() && receipt.getTmoney()>=10000 && Integer.valueOf(cas.getDtime())>=30){
					receipt.setRedmoney(list.get(i).getRedmoney());
					receipt.setRedid(list.get(i).getRedid());
					list.get(i).setType("1");
					userRedMapper.updateByPrimaryKeySelective(list.get(i));
					break;
				}else if(list.get(i).getRedname().indexOf(receipt.getProductname())!=-1 && receipt.getTmoney()>=10000 && Integer.valueOf(cas.getDtime())>=30){
					receipt.setRedmoney(list.get(i).getRedmoney());
					receipt.setRedid(list.get(i).getRedid());
					list.get(i).setType("1");
					userRedMapper.updateByPrimaryKeySelective(list.get(i));
					break;
				}else if(list.get(i).getRedname().indexOf("友金服")!=-1 && receipt.getTmoney()>=10000 && Integer.valueOf(cas.getDtime())>=30 && receipt.getProductname()!="陆金所"){
					receipt.setRedmoney(list.get(i).getRedmoney());
					receipt.setRedid(list.get(i).getRedid());
					list.get(i).setType("1");
					userRedMapper.updateByPrimaryKeySelective(list.get(i));
					break;
				}else if(list.get(i).getRedname().indexOf("全平台")!=-1 && receipt.getTmoney()>=10000 && Integer.valueOf(cas.getDtime())>=30 ){
					receipt.setRedmoney(list.get(i).getRedmoney());
					receipt.setRedid(list.get(i).getRedid());
					list.get(i).setType("1");
					userRedMapper.updateByPrimaryKeySelective(list.get(i));
					break;
				}else if(list.get(i).getRedname().indexOf("客服")!=-1 && receipt.getTmoney()>=10000 && Integer.valueOf(cas.getDtime())>=30 ){
					receipt.setRedmoney(list.get(i).getRedmoney());
					receipt.setRedid(list.get(i).getRedid());
					list.get(i).setType("1");
					userRedMapper.updateByPrimaryKeySelective(list.get(i));
					break;
				}
			}
			reMapper.insertSelective(receipt);
			try {
				pw=response.getWriter();
				json="{'code':'1'}";
				pw.print(json);
				pw.flush();
				pw.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	@Override
	public void queryReceiptByVidForApp(HttpServletResponse response,frontBean front) {
		front.setPage(front.getPage()*front.getLimit());
		List<frontBean> re = reMapper.queryReceiptByVidForApp(front);
		if(re.size()==0){
			frontBean frontt=new frontBean();
			frontt.setDe("2");
			re.add(frontt);
			try {
				String json = JSONArray.fromObject(re).toString();         
				response.setHeader("Cache-Control", "no-cache");
				response.setContentType("text/json; charset=utf-8");
				response.getWriter().print(json);
				response.getWriter().flush(); 
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		}else{
			for (int i = 0; i < re.size(); i++) {
				switch (re.get(i).getQx()) {
				case "1":
					re.get(i).setQx("已通过");
					re.get(i).setTag("未打款");
					break;
				case "2":
					re.get(i).setQx("驳回");
					re.get(i).setTag("未打款");
					break;
				case "3":
					re.get(i).setQx("未审核");
					break;
				case "4":
					re.get(i).setQx("已通过");
					re.get(i).setTag("已打款");
					break;
				case "5":
					re.get(i).setQx("删除");
					re.get(i).setTag("未打款");
					break;
				default:
					break;
				}
			}
			try {
				re.get(0).setDe("1");
				re.get(0).setPage(front.getPage()/front.getLimit());
				String json = JSONArray.fromObject(re).toString();         
				response.setHeader("Cache-Control", "no-cache");
				response.setContentType("text/json; charset=utf-8");
				response.getWriter().print(json);
				response.getWriter().flush(); 
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}	
		}
	}

	@Override
	public void queryFriendReceiptByVidForApp(HttpServletResponse response,userFriendReceiptBean uf) {
		uf.setPage(uf.getPage()*uf.getLimit());
		userBean user = userMapper.selectByPrimaryKey(Long.valueOf(uf.getCtime()));
		uf.setCtime(user.getOwninvitation());
		List<userFriendReceiptBean> friend = userMapper.queryUserFriendReceipt(uf);
		if(friend.size()==0){
			userFriendReceiptBean frontt=new userFriendReceiptBean();
			frontt.setCount(String.valueOf("2"));
			friend.add(frontt);
			try {
				String json = JSONArray.fromObject(friend).toString();         
				response.setHeader("Cache-Control", "no-cache");
				response.setContentType("text/json; charset=utf-8");
				response.getWriter().print(json);
				response.getWriter().flush(); 
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		}else{
			try {
				for (userFriendReceiptBean userFriendReceiptBean : friend) {
					userFriendReceiptBean.setCtime(userFriendReceiptBean.getCtime().substring(0,10));
				}
				friend.get(0).setCount(String.valueOf("1"));
				friend.get(0).setPage(uf.getPage()/uf.getLimit());
				String json = JSONArray.fromObject(friend).toString();         
				response.setHeader("Cache-Control", "no-cache");
				response.setContentType("text/json; charset=utf-8");
				response.getWriter().print(json);
				response.getWriter().flush(); 
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}	
		}
	}

	@Override
	public void queryInvitationByUcodeForApp(HttpServletResponse response,userBean user) {
		invitationBean invi=new invitationBean();
		userBean us = userMapper.selectByPrimaryKey(user.getVid());
		Object obj = userMapper.queryInvitationNumByUcode(us.getOwninvitation());
		if(obj==null || "".equals(obj)){
			invi.setYqnum("0");
		}else{
			invi.setYqnum(String.valueOf(obj));
		}
		inviBean inv = inviMapper.selectByVid(us.getVid());
		if(inv==null || "".equals(invi)){
			invi.setYdmoney("0");
			invi.setWdmoney("0");
			invi.setLjmoney("0");
		}else{
			invi.setYdmoney(String.valueOf(inv.getDkmoney()));
			invi.setWdmoney(String.valueOf(inv.getLjmoney()));
			invi.setLjmoney(String.valueOf(inv.getDkmoney()+inv.getLjmoney()));
		}
		try {
			String json = JSONArray.fromObject(invi).toString();         
			response.setHeader("Cache-Control", "no-cache");
			response.setContentType("text/json; charset=utf-8");
			response.getWriter().print(json);
			response.getWriter().flush(); 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
