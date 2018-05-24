package com.lcxsfront.service.impl;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Service;

import com.lcxsfront.mapper.noteBeanMapper;
import com.lcxsfront.mapper.productBeanMapper;
import com.lcxsfront.mapper.shopBeanMapper;
import com.lcxsfront.model.banner;
import com.lcxsfront.model.frontBean;
import com.lcxsfront.model.noteBean;
import com.lcxsfront.model.productBean;
import com.lcxsfront.model.productMessageBean;
import com.lcxsfront.model.shopBean;
import com.lcxsfront.service.IShopService;
@Service
public class shopServiceImpl implements IShopService{

	@Resource
	private shopBeanMapper shopMapper;
	@Resource
	private noteBeanMapper noteMapper;
	@Resource
	private productBeanMapper prMapper;
	
	@Override
	public shopBean selectByPrimaryKey(Long id) {
		// TODO Auto-generated method stub
		return shopMapper.selectByPrimaryKey(id);
	}
	@Override
	public void queryAll(HttpServletResponse response,frontBean front) {
		front.setPage(front.getPage()*front.getLimit());
		List<frontBean> list = shopMapper.queryAll(front);
		front.setPage(front.getPage()+front.getLimit());
		List<frontBean> listt = shopMapper.queryAll(front);
		if(list.size()==0){
			frontBean frontt=new frontBean();
			frontt.setDe("2");
			list.add(frontt);
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
			if(list.size()<front.getLimit() || listt.size()==0){
				try {
					list.get(0).setDe("0");
					list.get(0).setPage((front.getPage()-front.getLimit())/front.getLimit());
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
				try {
					list.get(0).setDe("1");
					list.get(0).setPage((front.getPage()-front.getLimit())/front.getLimit());
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
	}
	@Override
	public void queryBanner(HttpServletResponse response) {
		List<banner> list = shopMapper.queryBanner();
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
	public void queryNote(HttpServletResponse response,noteBean note) {
		List<noteBean> list = noteMapper.queryNote(note);
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
	public void queryLogo(HttpServletResponse response) {
		List<shopBean> list = shopMapper.queryLogo();
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
	public void queryShopListByFy(HttpServletResponse response, frontBean front) {
		if(front.getMinxnh()==0){
		}else if(front.getMinxnh()==1){
			front.setMinxnh(1);
			front.setMaxxnh(12);
		}else if(front.getMinxnh()==2){
			front.setMinxnh(12);
			front.setMaxxnh(20);
		}else if(front.getMinxnh()==3){
			front.setMinxnh(20);
			front.setMaxxnh(40);
		}else if(front.getMinxnh()==4){
			front.setMinxnh(40);
			front.setMaxxnh(100000);
		}
		if(front.getMinzq()==0){
		}else if(front.getMinzq()==1){
			front.setMinzq(1);
			front.setMaxzq(90);
		}else if(front.getMinzq()==2){
			front.setMinzq(90);
			front.setMaxzq(180);
		}else if(front.getMinzq()==3){
			front.setMinzq(180);
			front.setMaxzq(360);
		}else if(front.getMinzq()==4){
			front.setMinzq(360);
			front.setMaxzq(100000);
		}
		List<frontBean> list = shopMapper.queryShopListByFy(front);
		List<Object> obj = shopMapper.queryShopList(front);
		if(obj.size()==0){
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
			list.get(0).setCount(obj.size());
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
	public void queryAllProduct(HttpServletResponse response,productBean product) {
		List<productBean> list = prMapper.queryAllProduct(product);
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
	public void queryBannerForApp(HttpServletResponse response) {
		List<banner> list = shopMapper.queryBannerForApp();
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
