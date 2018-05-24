package com.lcxsfront.service;

import javax.servlet.http.HttpServletResponse;

import com.lcxsfront.model.frontBean;
import com.lcxsfront.model.receiptBean;
import com.lcxsfront.model.userBean;
import com.lcxsfront.model.userFriendReceiptBean;


public interface IReceiptService {
    /**
     * 查询总投资人数
     */
    void queryUser(HttpServletResponse response);
    /**
     * 根据产品id查方案信息
     */
    void queryCaseByPid(HttpServletResponse response,Long pid);
    /**
     * 根据产品id查询信息
     */
    void queryProductByPid(HttpServletResponse response,Long pid);
    /**
     * 添加回单信息
     */
    void addReceipt(HttpServletResponse response,receiptBean receipt);
    /**
     * 根据vid查询用户订单
     */
    void queryReceiptByVidForApp(HttpServletResponse response,frontBean front);
    /**
     * 根据vid查询邀请人回单信息
     */
    void queryFriendReceiptByVidForApp(HttpServletResponse response,userFriendReceiptBean uf);
    /**
     * 根据vid查询邀请人信息
     */
    void queryInvitationByUcodeForApp(HttpServletResponse response,userBean user);
}
