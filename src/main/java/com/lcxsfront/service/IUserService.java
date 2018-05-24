package com.lcxsfront.service;


import com.lcxsfront.model.bankBean;
import com.lcxsfront.model.frontBean;
import com.lcxsfront.model.userBean;
import com.lcxsfront.model.userFriendReceiptBean;

import javax.servlet.http.HttpServletResponse;

public interface IUserService {
	/**
     * 查询这个用户收益信息
     */
    void queryUserPandectByVid(HttpServletResponse response,Long vid);
    /**
     * 分页查询这个用户所有回单信息
     */
    void queryAllMessageByVid(HttpServletResponse response,userBean user);
    /**
     * 查询用户手机银行卡信息
     */
    void queryPersonMessageByVid(HttpServletResponse response,Long vid);
    /**
     * 修改用户信息根据vid
     */
    void updataUser(HttpServletResponse response,userBean user);
    /**
     * 修改用户银行卡信息
     */
    void updataBank(HttpServletResponse response,bankBean bank);
    /**
     * 用户登录
     */
    void login(HttpServletResponse response,userBean user);
    /**
     * 查询所有用户的手机号码
     */
    void queryPhone(HttpServletResponse response,userBean user);
    /**
     * 发送验证码
     */
    void sendCode(HttpServletResponse response,userBean user);
    /**
     * 注册用户
     */
    void addUser(HttpServletResponse response,userBean user);
    /**
     * 查询用户邀请码
     */
    void queryOwninvitatime(HttpServletResponse response,userBean user);
    /**
     * 查询用户邀请人的回单状态
     */
    void queryUserFriendReceipt(HttpServletResponse response,userFriendReceiptBean uf);
    /**
     * 查询邀请人信息
     */
    void queryInvitationByUcode(HttpServletResponse response,userBean user);
    /*
     *查询所有客服 
     */
    void queryAllStaff(HttpServletResponse response);
    /**
     * 为用户添加客服
     */
    void addKfToUser(HttpServletResponse response,userBean user);
    /**
     * 根据vid查询用户
     */
    void queryUserByVid(HttpServletResponse response,userBean user);
    /**
     * 根据vid查询用户信息app
     */
    void queryMessageByVidForApp (HttpServletResponse response,userBean user);
    /**
     * 根据vid查询用户红包
     */
    void queryUserRedByVidForApp(HttpServletResponse response,frontBean front);
    /*
     *根据用户电话修改用户密码 
     */
    void updatePassword(HttpServletResponse response,userBean user);

    int updateOwnByVid(userBean user);

}
