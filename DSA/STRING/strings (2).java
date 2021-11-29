public class strings{

   public static void main(String[] args) {

    // String is non-primitive datatype in java
    // it is a sequence of character
   
    //It must be surroungdedby double quotes

   // declaration 
   String  str1="Ajay";
      String str2=new String("Sachin");

    System.out.println(str1);
    System.out.println(str2);
   // length() method 
 System.out.println(str1.length()); 
 System.out.println(str2.length()); 

// toUpperCase() toLowercase
System.out.println(str1.toUpperCase());
System.out.println(str1.toLowerCase());

// indexOf 
System.out.println(str1.indexOf("j"));

// " " it String  ' ' it means char

// + concatenation 
String name=str1+" "+str2;
System.out.println(name);
 
// concat method 
 //String in immutable in java it return new string 
String name1=str1.concat(str2);
System.out.println(name1+" "+str1);

// Special charcater 
// for inserting any character in string we use \
String s_str="Ajay\nkumar\nverma "; 
System.out.println(s_str);

String c_str="Ajay\" ";
System.out.println(c_str);

String t_str="Ajay \t Kumar";
System.out.println(t_str);


// Adding number and  string 
// + is use for both add number and concat string 

System.out.println("20"+"10"+"\n"+(10+20));

System.out.println(10+"20"+"\n"+"40"+20);

//If we sum String and number it do String concatenation
System.out.println(12+"A"); // Here A is String not a characater 
// It could be in any order 


// charAt() return char at given position 
String exp="ABCDEFGHIJK";
System.out.println(exp.charAt(2));
 
//indexOf  
System.out.println(exp.indexOf('C'));

// contains it return bool it parameter must be String
System.out.println(exp.contains("AK"));

// endsWith startsWith it return bool 
System.out.println(exp.startsWith("AB")+"\n"+exp.endsWith("JI"));

// toCharArray() it return new character Array

char c_ar[]=exp.toCharArray();
System.out.println(c_ar);


// split return array of string 
String s_ar[]=exp.split("");
System.out.println(s_ar);

}
}