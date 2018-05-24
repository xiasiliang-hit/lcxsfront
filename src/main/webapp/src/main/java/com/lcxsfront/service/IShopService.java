package com.lcxsfront.service;


import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.lcxsfront.model.frontBean;
import com.lcxsfront.model.noteBean;
import com.lcxsfront.model.productBean;
import com.lcxsfront.model.productMessageBean;
import com.lcxsfront.model.shopBean;

public interface IShopService {
	shopBean selectByPrimaryKey(Long id);
	/**
     * 查询所有商品信息
     */
    void queryAll(HttpServletResponse response,frontBean front);
    /**
     * 查询所有横幅
     */
    void queryBanner(HttpServletResponse response);
    /**
     * 查询所有横幅
     */
    void queryBannerForApp(HttpServletResponse response);
    /**
     * 查询所有公告
     */
    void queryNote(HttpServletResponse response,noteBean note);
    /**
     * 查询轮播logo
     */
    void queryLogo(HttpServletResponse response);
    /**
     * 分页查询商品
     */
    void queryShopListByFy(HttpServletResponse response,frontBean front);
    /**
     * 查询所有产品信息
     */
    void queryAllProduct(HttpServletResponse response,productBean product);
}
