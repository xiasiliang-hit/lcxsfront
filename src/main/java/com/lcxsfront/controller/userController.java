package com.lcxsfront.controller;


import com.lcxsfront.model.bankBean;
import com.lcxsfront.model.frontBean;
import com.lcxsfront.model.userBean;
import com.lcxsfront.model.userFriendReceiptBean;
import com.lcxsfront.service.IUserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/user")
public class userController {

	@Resource
	private IUserService userService;
	
	@RequestMapping("/queryAllMessageByVid")
	public void userMessage(@RequestBody userBean user,HttpServletResponse response){
		userService.queryAllMessageByVid(response, user);
	}
	
	@RequestMapping("/queryUserPandectByVid")
	public void queryUserPandectByVid(@RequestBody userBean user,HttpServletResponse response){
		userService.queryUserPandectByVid(response, user.getVid());
	}
	
	@RequestMapping("/queryPersonMessageByVid")
	public void queryPersonMessageByVid(HttpServletResponse response,@RequestBody userBean user){
		userService.queryPersonMessageByVid(response, user.getVid());
	}
	
	@RequestMapping("/updateUser")
	public void updataUser(HttpServletResponse response,@RequestBody userBean user){
		userService.updataUser(response,user);
	}
	
	@RequestMapping("/updateBank")
	public void updataBank(HttpServletResponse response,@RequestBody bankBean bank){
		userService.updataBank(response,bank);
	}
	
	@RequestMapping("/login")
	public void login(HttpServletResponse response,@RequestBody userBean user){
		userService.login(response,user);
	}
	
	@RequestMapping("/queryPhone")
	public void queryPhone(HttpServletResponse response,@RequestBody userBean user){
		userService.queryPhone(response,user);
	}
	
	@RequestMapping("/sendCode")
	public void sendCode(HttpServletResponse response,@RequestBody userBean user){
		userService.sendCode(response,user);
	}
	
	@RequestMapping("/addUser")
	public void addUser(HttpServletResponse response,@RequestBody userBean user){
		userService.addUser(response,user);
	}


	@RequestMapping("/updateTuishouOwn")
	public void updateTuishouOwn(@RequestBody userBean user)
	{
		 userService.updateOwnByVid(user);
	}

	@RequestMapping("/queryOwninvitatime")
	public void queryOwninvitatime(HttpServletResponse response,@RequestBody userBean user){

		userService.queryOwninvitatime(response,user);
	}
	
	@RequestMapping("/queryUserFriendReceipt")
	public void queryUserFriendReceipt(HttpServletResponse response,@RequestBody userFriendReceiptBean uf){
		userService.queryUserFriendReceipt(response,uf);
	}
	
	@RequestMapping("/queryInvitationByUcode")
	public void queryInvitationByUcode(HttpServletResponse response,@RequestBody userBean user){
		userService.queryInvitationByUcode(response, user);
	}
	
	@RequestMapping("/queryAllStaff")
	public void queryAllStaff(HttpServletResponse response){
		userService.queryAllStaff(response);
	}
	
	@RequestMapping("/addKfToUser")
	public void addKfToUser(HttpServletResponse response,@RequestBody userBean user){
		userService.addKfToUser(response,user);
	}
	
	@RequestMapping("/queryUserByVid")
	public void queryUserByVid(HttpServletResponse response,@RequestBody userBean user){
		userService.queryUserByVid(response,user);
	}
	
	@RequestMapping("/queryMessageByVidForApp")
	public void queryMessageByVidForApp(HttpServletResponse response,@RequestBody userBean user){
		userService.queryMessageByVidForApp(response,user);
	} 
	
	@RequestMapping("/queryUserRedByVidForApp")
	public void queryUserRedByVidForApp(HttpServletResponse response,@RequestBody frontBean front){
		userService.queryUserRedByVidForApp(response,front);
	} 
	
	@RequestMapping("/updatePassword")
	public void updatePassword(HttpServletResponse response,@RequestBody userBean user){
		userService.updatePassword(response,user);
	} 
}
