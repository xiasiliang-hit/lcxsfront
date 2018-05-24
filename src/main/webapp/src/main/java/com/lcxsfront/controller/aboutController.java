package com.lcxsfront.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lcxsfront.model.frontBean;
import com.lcxsfront.model.noteBean;
import com.lcxsfront.service.IAboutService;

@Controller
@RequestMapping("/about")
public class aboutController {

	@Resource
	private IAboutService abService;
	
	@RequestMapping("/queryNote")
	public void queryNote(HttpServletResponse response,@RequestBody noteBean note){
		abService.queryNoteOnFY(response, note);
	}
	
	@RequestMapping("/queryNoteById")
	public void queryNoteById(HttpServletResponse response,@RequestBody noteBean note){
		abService.queryNoteById(response, note);
	}
	
	@RequestMapping("/queryShopSmall")
	public void queryShopSmall(HttpServletResponse response,@RequestBody noteBean note){
		abService.queryShopSmall(response, note);
	}
}
