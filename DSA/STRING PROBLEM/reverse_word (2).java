public class reverse_word {
    
public static void main(String[] args) {
    
  String  str ="Ajay kumar verma";
 
  String r_word_ary[]=str.split(" ");
  String r_str="";  
  
for(int i=0;i<r_word_ary.length;i++){
 r_str+=" "+r_word(r_word_ary[i]);

}

System.out.println(r_str);


}

public static String  r_word (String str){
    
  char ch[]=str.toCharArray();
  
 char rch[]=new char[ch.length];

 for(int i=0;i<ch.length;i++){
     rch[i]=ch[ch.length-1-i];
 }

  str= new String(rch);
   
 return str;
}



}
