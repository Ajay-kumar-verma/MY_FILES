import java.util.Scanner;
public class avg {

static Scanner sc= new Scanner(System.in);
    public static void main(String[] args){
 while(true){
     avg();
 }
 
 }

static void avg(){
int arr[];// Array declaration 
System.out.println("Enter size of  an Array");
int n=sc.nextInt();

arr= new int[n];// assigning size
System.out.println("Enter numbers");


int sum=0;
for(int i=0;i<n;i++){
arr[i]=sc.nextInt();// We can skil this part if we sum without storing 
sum+=arr[i];
}

 int avg=sum/n;

System.out.println("Avearage is ="+avg);

}

}
