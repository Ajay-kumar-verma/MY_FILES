import java.util.Scanner;
import java.lang.*;
public class stringprblem {

    
static Scanner sc= new Scanner(System.in); 

public static void main(String[] args) {
    
while(true){

System.out.println("Enter String ");

String str= sc.nextLine();

String []str1=str.split(" ");
 String revstr="";

for (String x : str1) {
   
    StringBuilder str2= new StringBuilder(x);

    revstr+=str2.reverse().toString()+" ";
// System.out.println(revstr);
    
}


System.out.println("Reverse string is : "+revstr);
System.out.println( str+" has "+str1.length+" Words");
System.out.println(str.charAt(1));
System.out.println(str.contains("Ajay"));
System.out.println(str.indexOf('j'));
String []chararry=str.split("");

for (String c : chararry) {
    System.out.println(c);
}


}

// System.out.println(str.endsWith("j"));
// System.out.println(str[0]);




}

}
