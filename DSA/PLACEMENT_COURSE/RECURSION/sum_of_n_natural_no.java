public class sum_of_n_natural_no {
    
public static void main(String[] args) {
    
// Finding sum of n natural no

 System.out.println(sum1(4));

 System.out.println(sum2(4));


}


// Recursion method 
public static int sum1(int n){

    // We know if we have n its sum will be 1 
 if(n==1){return 1;}

// splitting into sub problem  
return n+sum1(n-1);

}



// Fundamental method
public static int sum2(int n){
   
   return (n*(n+1))/2;
   
   }
   



}
