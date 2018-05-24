package com.lcxsfront.mapper;

import java.util.List;

import com.lcxsfront.model.frontBean;
import com.lcxsfront.model.userRedBean;

public interface userRedBeanMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_user_red
     *
     * @mbggenerated Thu Apr 12 17:00:44 CST 2018
     */
    int deleteByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_user_red
     *
     * @mbggenerated Thu Apr 12 17:00:44 CST 2018
     */
    int insert(userRedBean record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_user_red
     *
     * @mbggenerated Thu Apr 12 17:00:44 CST 2018
     */
    int insertSelective(userRedBean record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_user_red
     *
     * @mbggenerated Thu Apr 12 17:00:44 CST 2018
     */
    userRedBean selectByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_user_red
     *
     * @mbggenerated Thu Apr 12 17:00:44 CST 2018
     */
    int updateByPrimaryKeySelective(userRedBean record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_user_red
     *
     * @mbggenerated Thu Apr 12 17:00:44 CST 2018
     */
    int updateByPrimaryKey(userRedBean record);
    /**
     * 根据vid查询所有未过期未使用的红包
     */
    List<userRedBean> queryRedByVid(Long vid);
    /**
     * 根据vid查询用户所有红包
     */
    List<userRedBean> queryAllByVid(Long vid);
    /**
     * 按条件查询红包
     */
    List<userRedBean> queryRedByType(frontBean front);
}