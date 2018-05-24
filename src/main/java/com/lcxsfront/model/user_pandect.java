package com.lcxsfront.model;

public class user_pandect {

	private Object sumMoney;
	private Object dayMoney;
	private int waitingNum;
	private String ucode;
	private String mobile;
	private String kf;
	private String qq;
	public user_pandect(Object sumMoney, Object dayMoney, int waitingNum,
			String ucode, String mobile, String kf, String qq) {
		super();
		this.sumMoney = sumMoney;
		this.dayMoney = dayMoney;
		this.waitingNum = waitingNum;
		this.ucode = ucode;
		this.mobile = mobile;
		this.kf = kf;
		this.qq = qq;
	}
	public user_pandect() {
		super();
	}
	public Object getSumMoney() {
		return sumMoney;
	}
	public void setSumMoney(Object sumMoney) {
		this.sumMoney = sumMoney;
	}
	public Object getDayMoney() {
		return dayMoney;
	}
	public void setDayMoney(Object dayMoney) {
		this.dayMoney = dayMoney;
	}
	public int getWaitingNum() {
		return waitingNum;
	}
	public void setWaitingNum(int waitingNum) {
		this.waitingNum = waitingNum;
	}
	public String getUcode() {
		return ucode;
	}
	public void setUcode(String ucode) {
		this.ucode = ucode;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getKf() {
		return kf;
	}
	public void setKf(String kf) {
		this.kf = kf;
	}
	public String getQq() {
		return qq;
	}
	public void setQq(String qq) {
		this.qq = qq;
	}
}
