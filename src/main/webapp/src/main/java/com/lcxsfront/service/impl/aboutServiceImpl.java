package com.lcxsfront.service.impl;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Service;

import com.lcxsfront.mapper.noteBeanMapper;
import com.lcxsfront.mapper.shopBeanMapper;
import com.lcxsfront.model.frontBean;
import com.lcxsfront.model.noteBean;
import com.lcxsfront.model.shopBean;
import com.lcxsfront.service.IAboutService;
@Service
public class aboutServiceImpl implements IAboutService{

	@Resource
	private noteBeanMapper noteMapper;
	@Resource
	private shopBeanMapper shopMapper;
	@Override
	public void queryNoteOnFY(HttpServletResponse response,noteBean note) {
		List<noteBean> list = noteMapper.queryNoteOnFY(note);
		List<noteBean> ll = noteMapper.queryNote(note);
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
			list.get(0).setCount(ll.size());
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
	public void queryNoteById(HttpServletResponse response, noteBean note) {
		noteBean ne = noteMapper.selectByPrimaryKey(note);
		try {
			String json = JSONArray.fromObject(ne).toString();         
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
	public void queryShopSmall(HttpServletResponse response,noteBean note) {
		List<shopBean> list = shopMapper.queryShopSmall(note);
		frontBean front=new frontBean();
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
}
