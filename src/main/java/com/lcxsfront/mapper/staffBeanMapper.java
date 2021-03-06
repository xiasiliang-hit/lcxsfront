package com.lcxsfront.mapper;

import java.util.List;

import com.lcxsfront.model.staffBean;

public interface staffBeanMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_staff
     *
     * @mbggenerated Sun Apr 08 14:04:39 CST 2018
     */
    int deleteByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_staff
     *
     * @mbggenerated Sun Apr 08 14:04:39 CST 2018
     */
    int insert(staffBean record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_staff
     *
     * @mbggenerated Sun Apr 08 14:04:39 CST 2018
     */
    int insertSelective(staffBean record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_staff
     *
     * @mbggenerated Sun Apr 08 14:04:39 CST 2018
     */
    staffBean selectByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_staff
     *
     * @mbggenerated Sun Apr 08 14:04:39 CST 2018
     */
    int updateByPrimaryKeySelective(staffBean record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_staff
     *
     * @mbggenerated Sun Apr 08 14:04:39 CST 2018
     */
    int updateByPrimaryKey(staffBean record);
    /**
     * 查询所有客服
     */
    List<staffBean> queryAllStaff();
    /**
     * 根据客服QQ查询客服
     */
    staffBean qeuryKfByKfqq(String qq);
}