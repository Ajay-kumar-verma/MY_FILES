import java.util.Scanner;
public class greater_number{
static Scanner sc=  new Scanner(System.in);
  public static void main(String[] args){
 
while(true) {num();}

}

public static void  num(){
        System.out.println("Enter numbers ");
   int n1= sc.nextInt();
   int n2= sc.nextInt();
   int n3= sc.nextInt();
  
   int  max=0;
     if(n1>=n2){

   if(n3>n1) max=n3;
    else{ max=n1;}
  
     }
     else{
       if(n3>n2) max=n3;
       else{ max=n2;}
    
     }

    System.out.println(" max number is "+max);
}



}
