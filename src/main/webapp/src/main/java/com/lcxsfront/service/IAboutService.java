package com.lcxsfront.service;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.lcxsfront.model.frontBean;
import com.lcxsfront.model.noteBean;
import com.lcxsfront.model.shopBean;

public interface IAboutService {
	/**
     * 分页查询所有公告
     */
    void queryNoteOnFY(HttpServletResponse response,noteBean note);
    /**
     * 根据id和类型查询单条公告内容
     */
    void queryNoteById(HttpServletResponse response,noteBean note);
    /**
     * 查询关于我们中合作平台简介
     */
    void queryShopSmall(HttpServletResponse response,noteBean note);
}
