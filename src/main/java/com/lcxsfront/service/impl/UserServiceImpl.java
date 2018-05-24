package com.lcxsfront.service.impl;

import com.lcxsfront.mapper.*;
import com.lcxsfront.model.*;
import com.lcxsfront.service.IUserService;
import net.sf.json.JSONArray;
import org.apache.shiro.crypto.hash.Md5Hash;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
@Service
public class UserServiceImpl implements IUserService{

	@Resource
	private userBeanMapper userMapper;
	@Resource
	private bankBeanMapper bankMapper;
	@Resource
	private userBeankBeanMapper ubMapper;
	@Resource
	private redBeanMapper redMapper;
	@Resource
	private userRedBeanMapper urMapper;
	@Resource
	private staffBeanMapper staffMapper;
	@Resource
	private inviBeanMapper inviMapper;
	@Resource
	private userRedBeanMapper userRedMapper;

	@Override
	public void queryUserPandectByVid(HttpServletResponse response,Long vid) {
		Object sumMoney = userMapper.queryTotalMoneyByVid(vid);
		Object dayMoney = userMapper.queryTodayMoneyByVid(vid);
		List<Object> list = userMapper.qeuryReceiptByVid(vid);
		userBean user = userMapper.selectByPrimaryKey(vid);
		if(sumMoney==null || "".equals(sumMoney) || sumMoney=="0"){
			sumMoney=String.valueOf("0");
		}
		if(dayMoney==null || "".equals(dayMoney) || dayMoney=="0"){
			dayMoney=String.valueOf("0");
		}
		sumMoney = Double.parseDouble(String.valueOf(sumMoney));
		dayMoney = Double.parseDouble(String.valueOf(dayMoney));
		user_pandect up=new user_pandect(sumMoney, dayMoney, list.size(), user.getOwninvitation(), user.getPhone(), user.getKf(), null);
		try {
			String json = JSONArray.fromObject(up).toString();         
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
	public void queryAllMessageByVid(HttpServletResponse response,userBean user) {
		List<userReceiptMessage> list=userMapper.queryAllMessageByVid(user);
		Object coun = userMapper.queryReceiptNumByVid(user);
		if(coun==null || coun=="0"){
			coun=String.valueOf("0");
		}
		if(list.size()==0){
			try {
				String json = JSONArray.fromObject(list).toString();         
				response.setHeader("Cache-Control", "no-cache");
				response.setContentType("text/json; charset=utf-8");
				response.getWriter().print(json);
				response.getWriter().flush(); 
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		}else{
			list.get(0).setDatacount(coun);
			for (int i = 0; i < list.size(); i++) {
				list.get(i).setCtime(list.get(i).getCtime().substring(0,10));
				list.get(i).setTtime(list.get(i).getTtime().substring(0,10));
				String[] dd = list.get(i).getDtime().split("天");
				list.get(i).setDtime(dd[0]);
				switch (list.get(i).getStatus()) {
				case "1":
					list.get(i).setStatus("已通过");
					break;
				case "2":
					list.get(i).setStatus("已驳回");
					break;
				case "3":
					list.get(i).setStatus("未审核");
					break;
				case "4":
					list.get(i).setStatus("已打款");
					break;
				case "5":
					list.get(i).setStatus("已删除");
					break;
				default:
					break;
				}
			}
			try {
				String json = JSONArray.fromObject(list).toString();         
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
	public void queryPersonMessageByVid(HttpServletResponse response,Long vid) {
		personMessage list = userMapper.queryPersonMessageByVid(vid);
		try {
			String json = JSONArray.fromObject(list).toString();         
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
	public void updataUser(HttpServletResponse response, userBean user) {
		response.setHeader("Content-type", "text/html;charset=UTF-8");  
		PrintWriter pw = null;
		String json="";
		if(user.getPassword()==null || "".equals(user.getPassword())){
			userMapper.updateByPrimaryKeySelective(user);
		}else{
			Md5Hash md5=new Md5Hash(user.getPassword(),"cjlc0577",1);
			user.setPassword(md5.toString());
			userMapper.updateByPrimaryKeySelective(user);
		}
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

	@Override
	public void updataBank(HttpServletResponse response, bankBean bank) {
		response.setHeader("Content-type", "text/html;charset=UTF-8");  
		PrintWriter pw = null;
		String json="";
		bankBean bankk = bankMapper.queryBankByVid(Long.parseLong(bank.getCtime()));
		bank.setId(bankk.getId());
		bank.setCtime(Time.getTime());
		bankMapper.updateByPrimaryKeySelective(bank);
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

	@Override
	public void login(HttpServletResponse response, userBean user) {
		Md5Hash md5=new Md5Hash(user.getPassword(),"cjlc0577",1);
		user.setPassword(md5.toString());
		userBean us = userMapper.login(user);
		if(us!=null){
			try {
				changeRedType(us.getVid());
				String json = JSONArray.fromObject(us).toString();         
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
	public void queryPhone(HttpServletResponse response, userBean user) {
		List<String> list = userMapper.queryPhone();
		for (int i = 0; i < list.size(); i++) {
			if(user.getPhone()==list.get(i) || user.getPhone().equals(list.get(i))){
				user.setPhone("1001");
			}
		}
		try {
			String json = JSONArray.fromObject(user).toString();         
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
	public void sendCode(HttpServletResponse response, userBean user) {
		String code =String.valueOf((int)((Math.random()*9+1)*100000));
		String phone=String.valueOf(user.getPhone());
		try {
			SendCode.send(phone, code);
			user.setCtime(code);
			String json = JSONArray.fromObject(user).toString();         
			response.setHeader("Cache-Control", "no-cache");
			response.setContentType("text/json; charset=utf-8");
			response.getWriter().print(json);
			response.getWriter().flush(); 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}


	@Override
	public void addUser(HttpServletResponse response, userBean user) {
		user.setVid(Time.getId());
		user.setCtime(Time.getTime());
		user.setStatus(1);
		Md5Hash md5=new Md5Hash(user.getPassword(),"cjlc0577",1);
		user.setPassword(md5.toString());
		String code="";
		String random [] = {"0","1","2","3","4","5","6","7","8","9","A","B","C","D","E",
		"F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"};
		for (int i = 0; i < 6; i++) {
			int j=(int)(Math.random()*34);
			code+=random[j];
		}
		user.setOwninvitation(code);

		//62. set customer service, kf
		String beInvitatedCode = user.getInvitation();
		userBean u = userMapper.queryUserByOwninvitation(beInvitatedCode);
		// invited
		if (u != null) {
			String kf = u.getKf();
			user.setKf(kf);
		}
		else //not invited user, canbe user, or tuishou
		{}


		userMapper.insert(user);
		List<redBean> list = redMapper.queryAllRed();
		for (int i = 0; i < list.size(); i++) {
			userRedBean ur=new userRedBean(user.getVid(),list.get(i).getRedid(),list.get(i).getRedmoney(),
					list.get(i).getRedcondition(),Time.getTime(),list.get(i).getRedname(),
					list.get(i).getDays(),"0",list.get(i).getContext());
			urMapper.insertSelective(ur);
		}
		bankBean bank=new bankBean();
		bankMapper.insert(bank);
		userBeankBean ub=new userBeankBean( user.getVid(), bank.getId());
		ubMapper.insert(ub);
		userBean us = userMapper.selectByPrimaryKey(user.getVid());
		try {
			String json = JSONArray.fromObject(us).toString();         
			response.setHeader("Cache-Control", "no-cache");
			response.setContentType("text/json; charset=utf-8");
			response.getWriter().print(json);
			response.getWriter().flush(); 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}


	@Override
	public void queryOwninvitatime(HttpServletResponse response, userBean user) {
		userBean us = userMapper.selectByPrimaryKey(user.getVid());

		us.setCtime("http://www.ilcxs.com/login/signin.html?address="+us.getOwninvitation());
		try {
			String json = JSONArray.fromObject(us).toString();         
			response.setHeader("Cache-Control", "no-cache");
			response.setContentType("text/json; charset=utf-8");
			response.getWriter().print(json);
			response.getWriter().flush(); 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Override
	public void queryUserFriendReceipt(HttpServletResponse response,userFriendReceiptBean uf) {
		List<userFriendReceiptBean> friend = userMapper.queryUserFriendReceipt(uf);
		Object count = userMapper.queryUserFriendReceiptNum(uf.getCtime());
		if(friend!=null || "".equals(friend)){
			friend.get(0).setCount(count);
			for (int i = 0; i < friend.size(); i++) {
				friend.get(i).setCtime(friend.get(i).getCtime().substring(0,10));
				switch (friend.get(i).getStatus()) {
				case "1":
					friend.get(i).setStatus("是");
					break;
				case "2":
					friend.get(i).setStatus("否");
					break;
				case "3":
					friend.get(i).setStatus("暂未");
					break;
				case "4":
					friend.get(i).setStatus("是");
					break;
				case "5":
					friend.get(i).setStatus("否");
					break;
				default:
					break;
				}
			}
			try {
				String json = JSONArray.fromObject(friend).toString();         
				response.setHeader("Cache-Control", "no-cache");
				response.setContentType("text/json; charset=utf-8");
				response.getWriter().print(json);
				response.getWriter().flush(); 
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}else{
			try {
				String json = JSONArray.fromObject(friend).toString();         
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


	@Override
	public void queryInvitationByUcode(HttpServletResponse response,userBean user) {
		invitationBean invi=new invitationBean();
		Object obj = userMapper.queryInvitationNumByUcode(user.getOwninvitation());
		if(obj==null || "".equals(obj)){
			invi.setYqnum("0");
		}else{
			invi.setYqnum(String.valueOf(obj));
		}
		List<Long> obb = userMapper.queryNumByUcde(user.getOwninvitation());
		int count=0;
		for (int i = 0; i < obb.size(); i++) {
			List<Object> list = userMapper.queryNumByVid(obb.get(i));
			if(list.size()>0){
				count++;
			}
		}
		invi.setTznum(String.valueOf(count));
		Double ojj = userMapper.queryMoneyByUcode(user.getOwninvitation());
		Object ooj = userMapper.queryDkmoneyByUcode(user.getOwninvitation());
		if(ooj==null || "".equals(ooj)){
			invi.setYdmoney("0");
		}else{
			invi.setYdmoney(String.valueOf(ooj));
		}
		invi.setLjmoney(String.valueOf(ojj));
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


	@Override
	public void queryAllStaff(HttpServletResponse response) {
		List<staffBean> list = staffMapper.queryAllStaff();
		try {
			String json = JSONArray.fromObject(list).toString();         
			response.setHeader("Cache-Control", "no-cache");
			response.setContentType("text/json; charset=utf-8");
			response.getWriter().print(json);
			response.getWriter().flush(); 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}


	@Override
	public void addKfToUser(HttpServletResponse response, userBean user) {
		staffBean staff = staffMapper.qeuryKfByKfqq(user.getKf());
		user.setKf(staff.getRealname());
		userMapper.updateByPrimaryKeySelective(user);
	}


	@Override
	public void queryUserByVid(HttpServletResponse response, userBean user) {
		userBean us = userMapper.selectByPrimaryKey(user.getVid());
		try {
			String json = JSONArray.fromObject(us).toString();         
			response.setHeader("Cache-Control", "no-cache");
			response.setContentType("text/json; charset=utf-8");
			response.getWriter().print(json);
			response.getWriter().flush(); 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}


	@Override
	public void queryMessageByVidForApp(HttpServletResponse response,userBean user) {
		Object sumMoney = userMapper.queryTotalMoneyByVid(user.getVid());
		inviBean invi = inviMapper.selectByVid(user.getVid());
		if(sumMoney==null || "".equals(sumMoney) || sumMoney=="0"){
			sumMoney=String.valueOf("0");
		}
		if(invi!=null){
			sumMoney = Double.parseDouble(String.valueOf(sumMoney))+invi.getLjmoney()+invi.getDkmoney();
		}
		sumMoney = Double.parseDouble(String.valueOf(sumMoney));
		userBean us = userMapper.selectByPrimaryKey(user.getVid());
		user_pandect up=new user_pandect();
		up.setMobile(us.getPhone());
		up.setSumMoney(sumMoney);
		up.setUcode(us.getOwninvitation());
		try {
			String json = JSONArray.fromObject(up).toString();         
			response.setHeader("Cache-Control", "no-cache");
			response.setContentType("text/json; charset=utf-8");
			response.getWriter().print(json);
			response.getWriter().flush(); 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}


	@Override
	public void queryUserRedByVidForApp(HttpServletResponse response,frontBean front) {
		front.setPage(front.getPage()*front.getLimit());
		List<userRedBean> list = userRedMapper.queryRedByType(front);
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		if(list.size()==0){
			userRedBean ur=new userRedBean();
			ur.setDe("2");
			list.add(ur);
			try {
				String json = JSONArray.fromObject(list).toString();         
				response.setHeader("Cache-Control", "no-cache");
				response.setContentType("text/json; charset=utf-8");
				response.getWriter().print(json);
				response.getWriter().flush(); 
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		}else{
			for (int i = 0; i < list.size(); i++) {
				try {
					Date date = dateFormat.parse(list.get(i).getCtime().substring(0,10));
					Calendar ca = Calendar.getInstance();
					ca.setTime(date);
			        ca.add(Calendar.DATE, list.get(i).getDays());// num为增加的天数，可以改变的
			        date = ca.getTime();
					list.get(i).setCtime(dateFormat.format(date));
				} catch (ParseException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			try {
				String json = JSONArray.fromObject(list).toString();         
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
	/**
	 * 修改红包状态
	 * @param vid 用户id
	 */
	public  void changeRedType(Long vid){
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
		String b=sdf.format(new Date());
		List<userRedBean> li = userRedMapper.queryAllByVid(vid);
		for (int i = 0; i < li.size(); i++) {
			String t=li.get(i).getCtime();
			t=t.substring(0,10);
			try {
				Date c = sdf.parse(b);
				Date e=sdf.parse(t);
				long intervalMilli = c.getTime() - e.getTime();
				if((int) (intervalMilli / (24 * 60 * 60 * 1000))>li.get(i).getDays()){
					li.get(i).setType("2");
					userRedMapper.updateByPrimaryKeySelective(li.get(i));
				}
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
	}


	@Override
	public void updatePassword(HttpServletResponse response, userBean user) {
		response.setHeader("Content-type", "text/html;charset=UTF-8");  
		PrintWriter pw = null;
		String json="";
		userBean us = userMapper.queryUserByPhone(user.getPhone());
		Md5Hash md5=new Md5Hash(user.getPassword(),"cjlc0577",1);
		us.setPassword(md5.toString());
		userMapper.updateByPrimaryKeySelective(us);
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

	@Override
	public int updateOwnByVid(userBean user)
	{

		System.err.println(user.getVid());
		return userMapper.updateOwnByVid(user.getVid());

	}
}
