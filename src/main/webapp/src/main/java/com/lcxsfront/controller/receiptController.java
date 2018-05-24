package com.lcxsfront.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lcxsfront.model.frontBean;
import com.lcxsfront.model.receiptBean;
import com.lcxsfront.model.shopBean;
import com.lcxsfront.model.userBean;
import com.lcxsfront.model.userFriendReceiptBean;
import com.lcxsfront.service.IReceiptService;
import com.lcxsfront.service.IShopService;

@Controller
@RequestMapping("/receipt")
public class receiptController {

	@Resource
	private IReceiptService recService;
	
	@RequestMapping("/queryProductByPid")
	public void queryProductByPid(HttpServletResponse response,@RequestBody shopBean shop){
		recService.queryProductByPid(response, shop.getShopid());
	}
	
	@RequestMapping("/queryCaseByPid")
	public void queryCaseByPid(HttpServletResponse response,@RequestBody shopBean shop){
		recService.queryCaseByPid(response, shop.getShopid());
	}
	
	@RequestMapping("/addReceipt")
	public void addReceipt(HttpServletResponse response,@RequestBody receiptBean receipt){
		recService.addReceipt(response, receipt);
	}
	
	@RequestMapping("/queryReceiptByVidForApp")
	public void queryReceiptByVidForApp(HttpServletResponse response,@RequestBody frontBean front){
		recService.queryReceiptByVidForApp(response, front);
	}
	
	@RequestMapping("/queryFriendReceiptByVidForApp")
	public void queryFriendReceiptByVidForApp(HttpServletResponse response,@RequestBody userFriendReceiptBean uf){
		recService.queryFriendReceiptByVidForApp(response,uf);
	}
	
	@RequestMapping("/queryInvitationByUcodeForApp")
	public void queryInvitationByUcodeForApp(HttpServletResponse response,@RequestBody userBean user){
		recService.queryInvitationByUcodeForApp(response,user);
	}
}
