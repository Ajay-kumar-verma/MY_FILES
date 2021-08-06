import java.util.Scanner;
public class StockBuySell {
static Scanner sc= new Scanner(System.in);
public static void main(String[] args) {
System.out.println("Enter number of days in stock ");
int n= sc.nextInt();
int  A[]=new int[n];

System.out.println("Enter values of stock ");
 for(int i=0;i<n;i++){
     A[i]=sc.nextInt();
 }
 System.out.println("MAx profit is = "+ maxProfit(A));   

    }
//  brute force attack method 
// static int maxProfit(int [] B){
//   int maxp=0;
//   for(int i=0;i<B.length;i++){
//       for(int j=i;j<B.length;j++){
//         maxp=((B[j]-B[i])>maxp)?(B[j]-B[i]):maxp; 
//       }
//   } 
//     return maxp;
//  }


 
// // minimum so far for buying 
// static int maxProfit(int []B){
//  int A[]=new int[B.length];//array for storing min so far for buying 
//   int minSoFar=B[0];
//  for(int i=0;i<B.length;i++){
//   A[i]=(minSoFar>B[i])?B[i]:minSoFar;
//   minSoFar=A[i];
//  }

// int maxp=0;
// for(int i=0;i<B.length;i++){
//     maxp=((B[i]-A[i])>maxp)?(B[i]-A[i]):maxp;
// }
// return maxp;
// // it is like when we are selling we can check before this we could bought at what  minCost .
// } 



//  one of the fastest method to find max Profit 

// from above soln we need only minSofar and Maxprofit we using that only
 

static int maxProfit(int []B){
     int minSoFar=B[0];
     int maxp=0;
   
for(int i=0;i<B.length;i++){
    minSoFar=(minSoFar>B[i])?B[i]:minSoFar;
    maxp=((B[i]-minSoFar)>maxp)?(B[i]-minSoFar):maxp;
      }
   
   return maxp;
   // it is like when we are selling we can check before this we could bought at what  minCost .
   } 

}
