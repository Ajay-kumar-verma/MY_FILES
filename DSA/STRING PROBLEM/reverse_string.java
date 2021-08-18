public class reverse_string{

public static void main(String[] args) {

 String str="ABCDEFGHI";
  
  char ch[]=str.toCharArray();

  // String ch[]=str.split("");
  // it wil return String array 
  
String sre="Ajay"+34;
// Mismatch assigning not possible in java
// Types conversion possible 


  char rch[];

  rch=new char[ch.length];

 for(int i=0;i<ch.length;i++){
     rch[i]=ch[ch.length-1-i];
 }

 System.out.println(new String(rch));

}





}