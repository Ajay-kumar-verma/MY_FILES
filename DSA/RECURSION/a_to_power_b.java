public class a_to_power_b {
 
  public static void main(String[] args) {
       
       
  System.out.println(power(4,2));


    }

  public static long power(int a,int b){

 if(b==1){return a;}

 return a*power(a,b-1);

}

}


