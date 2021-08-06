import java.util.Scanner;

public class sum {
    
static Scanner sc= new Scanner(System.in);

public static void main(String args[]){

   System.out.println("Enter total  number") ;
   int n= sc.nextInt();

  System.out.println("Enter number to be sum");
  
  int sum=0;
for(int i=0;i<n;i++){
    sum+=sc.nextInt();
}

System.out.println("sum is ="+sum);


    
}


}
