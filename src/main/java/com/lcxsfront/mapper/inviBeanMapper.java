package com.lcxsfront.mapper;

import com.lcxsfront.model.inviBean;

public interface inviBeanMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_invitation
     *
     * @mbggenerated Thu Apr 12 15:47:59 CST 2018
     */
    int deleteByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_invitation
     *
     * @mbggenerated Thu Apr 12 15:47:59 CST 2018
     */
    int insert(inviBean record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_invitation
     *
     * @mbggenerated Thu Apr 12 15:47:59 CST 2018
     */
    int insertSelective(inviBean record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_invitation
     *
     * @mbggenerated Thu Apr 12 15:47:59 CST 2018
     */
    inviBean selectByVid(Long vid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_invitation
     *
     * @mbggenerated Thu Apr 12 15:47:59 CST 2018
     */
    int updateByPrimaryKeySelective(inviBean record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_invitation
     *
     * @mbggenerated Thu Apr 12 15:47:59 CST 2018
     */
    int updateByPrimaryKey(inviBean record);
}