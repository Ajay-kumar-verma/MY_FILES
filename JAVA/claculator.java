import java.util.Scanner;

public class claculator {

  static Scanner sc= new Scanner(System.in);

    public static void main(String[] args) {
        
       
  while(true){

System.out.println("Enter Expression");
String exp=sc.nextLine();


try{

// System.out.println(Float.parseFloat(exp));
System.out.println(calc.isInt(exp));

  System.out.println("Answer is :"+calc.solve(exp));

}catch(Exception e){
  System.out.println(e);
}


  }


}

}

class calc{

  static Scanner sc= new Scanner(System.in);
public static float solve(String exp){
  
   
if(exp.contains("-")){
  String num[]=exp.split("[-]"); 
 
  float m,n;
    if(isInt(num[0])){
       m = Float.parseFloat(num[0]);    
     }else{
        m = solve(num[0]);
     }
     
     if(isInt(num[1])){
        n= Float.parseFloat(num[1]);
     }else{
        n=solve(num[1]);
     }
      
//  float  m = Float.parseFloat(num[0]);
//  float  n= Float.parseFloat(num[1]);
   return  m-n;
  
    }


         if(exp.contains("+")){
          String num[]=exp.split("[+]");   
          float m,n;
          if(isInt(num[0])){
             m = Float.parseFloat(num[0]);    
           }else{
              m = solve(num[0]);
           }
           
           if(isInt(num[1])){
              n= Float.parseFloat(num[1]);
           }else{
              n=solve(num[1]);
           }
                return   n+m;
          
              }
      
      


  if(exp.contains("*")){
    String num[]=exp.split("\\*"); 

    float m,n;
    if(isInt(num[0])){
       m = Float.parseFloat(num[0]);    
     }else{
        m = solve(num[0]);
     }
     
     if(isInt(num[1])){
        n= Float.parseFloat(num[1]);
     }else{
        n=solve(num[1]);
     }
      
         return n*m;

    }


  if(exp.contains("/")){
    String num[]=exp.split("\\/"); 
    float m,n;
    if(isInt(num[0])){
       m = Float.parseFloat(num[0]);    
     }else{
        m = solve(num[0]);
     }
     
     if(isInt(num[1])){
        n= Float.parseFloat(num[1]);
     }else{
        n=solve(num[1]);
     }
            return m/n;
            
                }


    if(exp.contains("%")){
          // int pos=exp.indexOf("%");
          String num[]=exp.split("\\*");    
       
           float m,n;
       
          if(isInt(num[0])){
            m = Float.parseFloat(num[0]);    
           }else{
            m = solve(num[0]);
           }
           
           if(isInt(num[1])){
              n= Float.parseFloat(num[1]);
           }else{
            n=solve(num[1]);
                    
            return m%n;
        
            }

           

          }

          return 0;

}
  
  
 
public static boolean isInt(String str){

boolean  flag= true;
for(int i=0;i<str.length();i++){

if(str.charAt(i)<'0' || str.charAt(i)>'9'){
 flag =false;
 break;
}

}

return flag;


}


}