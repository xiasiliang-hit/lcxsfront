package com.lcxsfront.model;
import java.io.*;

import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;

//发送手机短信验证类
public class SendCode {
    public static String api="http://v.juhe.cn/sms/send";
    public static final String KEY ="001f3c6059ac2e9827cc40c186fcd973";
    public static final String tpl_id="67095";

    /**
     * 发送短信验证调用的方法
     * @param mobile 手机号码
     * @param code 自动生成6位验证码
     * @return
     * @throws Exception
     */
    public static boolean send(String mobile,String code) throws Exception {
        String code_str = URLEncoder.encode("#code#=" + code, "utf-8");
        URL url = new URL(api + "?mobile=" + mobile + "&tpl_id=" + tpl_id + "&tpl_value=" + code_str + "&key=" + KEY);
        URLConnection connection = url.openConnection();
        HttpURLConnection httpURLConnection = (HttpURLConnection)connection;

        httpURLConnection.setDoOutput(true);
        httpURLConnection.setRequestMethod("GET");
        httpURLConnection.setRequestProperty("Accept-Charset", "utf-8");
        BufferedReader reader = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream(), "UTF-8"));
        StringBuffer sb=new StringBuffer();
        String lineData=null;
        while((lineData=reader.readLine())!=null){
            sb.append(lineData);
        }
        reader.close();
        if(sb.toString().indexOf("\"error_code\":0")>=0){
            return true;
        }
        return false;

    }

}
