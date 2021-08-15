public class String_constructor {
    

public static void main(String[] args) {
    
// Constructor overloading is possible in string  


// public String(){}
// public Sttring(String s){}
//public String (StringBuffer s){}
//public String (StringBuiler s){}
//public String (char[] ch){}
//public String(byte[] b){}


String str1=new String(); // It is for empty  constructor 
String str2=new String("");// it is for  empty constructor 

System.out.println(str1.length()+" "+str2.length());


char[] ar={'A','j','a','y'};

String name = new String(ar);


System.out.println(name);

StringBuilder strb= new StringBuilder("Vikash");

String  name2=new String(strb); 

StringBuffer strbr= new StringBuffer("Rahul");

String  name3=new String(strbr); 

System.out.println(name2);

System.out.println(name3);




byte []b={65,66,67,68,69,70};

String strbyt=new String(b); 

System.out.println(strbyt);


// Why character array i smore secure for character Array 
// String is immutable and store in scp that may cause 
//Garbage collection it can be hacked  


}
}
