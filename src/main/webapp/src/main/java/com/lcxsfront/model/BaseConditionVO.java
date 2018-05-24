package com.lcxsfront.model;


public class BaseConditionVO {
	public final static int PAGE_SHOW_COUNT = 20;
	private int pageNum = 1;
	private int pageSize = 5;
	private int totalCount = 0;
	private String orderField;
	private String orderDirection;
	
	private String keywords;
	private String keywordsname;
	private String keywordsnumber;
	private long keywordsauid;
	private int keywordsstatus;
	//用户vid
	private long vid;
	private double sum;
	private double rsum;
	private double jsum;
	public double getRsum() {
		return rsum;
	}
	public void setRsum(double rsum) {
		this.rsum = rsum;
	}
	public double getJsum() {
		return jsum;
	}
	public void setJsum(double jsum) {
		this.jsum = jsum;
	}
	public double getSum() {
		return sum;
	}
	public void setSum(double sum) {
		this.sum = sum;
	}
	
	
	
	public long getVid() {
		return vid;
	}
	public void setVid(long vid) {
		this.vid = vid;
	}
	public String getKeywordsname() {
		return keywordsname;
	}
	public void setKeywordsname(String keywordsname) {
		this.keywordsname = keywordsname;
	}
	public String getKeywordsnumber() {
		return keywordsnumber;
	}
	public void setKeywordsnumber(String keywordsnumber) {
		this.keywordsnumber = keywordsnumber;
	}
	public int getPageNum() {
		return pageNum;
	}
	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}
	public int getPageSize() {
		return pageSize > 0 ? pageSize : PAGE_SHOW_COUNT;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public String getOrderField() {
		return orderField;
	}
	public void setOrderField(String orderField) {
		this.orderField = orderField;
	}
	public String getOrderDirection() {
		return "desc".equals(orderDirection) ? "desc" : "asc";
	}
	public void setOrderDirection(String orderDirection) {
		this.orderDirection = orderDirection;
	}
	
	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}
	
	public String getKeywords() {
		return "".equals(keywords)? null : keywords;
	}
	public void setKeywords(String keywords) {
		this.keywords = keywords;
	}
	
	public int getStartIndex() {
		int pageNum = this.getPageNum() > 0 ? this.getPageNum() - 1 : 0;
		return pageNum * this.getPageSize();
	}
	public long getKeywordsauid() {
		return keywordsauid;
	}
	public void setKeywordsauid(long keywordsauid) {
		this.keywordsauid = keywordsauid;
	}
	public int getKeywordsstatus() {
		return keywordsstatus;
	}
	public void setKeywordsstatus(int keywordsstatus) {
		this.keywordsstatus = keywordsstatus;
	}
	@Override
	public String toString() {
		return "BaseConditionVO [pageNum=" + pageNum + ", pageSize=" + pageSize
				+ ", totalCount=" + totalCount + ", orderField=" + orderField
				+ ", orderDirection=" + orderDirection + ", keywords="
				+ keywords + ", keywordsname=" + keywordsname
				+ ", keywordsnumber=" + keywordsnumber + ", keywordsauid="
				+ keywordsauid + "]";
	}
}
