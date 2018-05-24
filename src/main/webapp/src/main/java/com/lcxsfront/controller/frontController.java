package com.lcxsfront.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


import org.springframework.stereotype.Controller;

import com.lcxsfront.model.frontBean;
import com.lcxsfront.model.noteBean;
import com.lcxsfront.model.productBean;
import com.lcxsfront.service.IReceiptService;
import com.lcxsfront.service.IShopService;

@Controller
@RequestMapping("/front")
public class frontController {

	@Resource
	private IShopService shopService;
	@Resource
	private IReceiptService reService;
	
	@RequestMapping("/queryAll")
	public void queryAll(HttpServletResponse response,@RequestBody frontBean front){
		shopService.queryAll(response,front);
	}
	
	
	@RequestMapping("/queryUser")
	public void queryUser(HttpServletResponse response){
		reService.queryUser(response);
	}
	
	@RequestMapping("/queryBanner")
	public void queryBanner(HttpServletResponse response){
		shopService.queryBanner(response);
	}
	
	@RequestMapping("/queryBannerForApp")
	public void queryBannerForApp(HttpServletResponse response){
		shopService.queryBannerForApp(response);
	}
	
	@RequestMapping("/queryNote")
	public void queryNote(HttpServletResponse response,@RequestBody noteBean note){
		shopService.queryNote(response,note);
	}
	
	@RequestMapping("/queryLogo")
	public void queryLogo(HttpServletResponse response){
		shopService.queryLogo(response);
	}
	
	@RequestMapping("/queryShopListByFy")
	public void queryShopListByFy(HttpServletResponse response,@RequestBody frontBean front){
		shopService.queryShopListByFy(response, front);
	}
	
	@RequestMapping("/queryAllProduct")
	public void queryAllProduct(HttpServletResponse response,@RequestBody productBean product){
		shopService.queryAllProduct(response,product);
	}
}
