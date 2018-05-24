package lcxsfront;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;




public class Test {
	public static void main(String[] args) throws ParseException {
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		String a="2018-01-04 08:58";
		a.subSequence(0,10);
		Date date = dateFormat.parse(a);
		Calendar ca = Calendar.getInstance();
		ca.setTime(date);
        ca.add(Calendar.DATE, 30);// num为增加的天数，可以改变的
        date = ca.getTime();
		System.out.println((dateFormat.format(date)));
	}
	
	public static void fun(){
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
		String d="2018-04-15";
		String b=sdf.format(new Date());
		try {
			Date c = sdf.parse(b);
			Date e=sdf.parse(d);
			 long intervalMilli = c.getTime() - e.getTime();
			 System.out.println((int) (intervalMilli / (24 * 60 * 60 * 1000)));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	public static void fun2(){
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss"); // 日期格式
		Date date=null;
		try {
			date = dateFormat.parse("2018-04-13 10:28:23");
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} // 指定日期
        System.out.println("现在的日期是：" + date);
        Calendar ca = Calendar.getInstance();
        ca.add(Calendar.DATE, 600);// num为增加的天数，可以改变的
        date = ca.getTime();
        String enddate = dateFormat.format(date);
        System.out.println("增加天数以后的日期：" + enddate);
		long time = date.getTime(); // 得到指定日期的毫秒数
		 time+=60*24*60*60*1000; // 相加得到新的毫秒数
		 Date newDate = new Date(time); // 将毫秒数转换成日期
		System.out.println(dateFormat.format(date).substring(0,10));// 输出格式化后的日期
		System.out.println(dateFormat.format(newDate).substring(0,10));
	}
	
	public static void fun3() throws ParseException{
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss"); // 日期格式
		Date d=new Date();
		System.out.println(d.getTime());
		String a=dateFormat.format(d);
		System.out.println("现在的日期是：" +a);
		d.setTime(d.getTime()+60000);
		String b=dateFormat.format(d);
		System.out.println("现在的日期是：" +b);
	}
}
