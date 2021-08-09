#include<iostream>
using namespace std;


// recursion algorithm for finding power of a  

// It is a recusion function that call itself again and  again 
long power_A(int a, int n){  // accepting base a  and power n 
    if(n==0){   // if n==0 it return 1
        return 1; 
    }

    else if(n%2==0){ // it is when   n is even 
         long result=power_A(a,n/2); //calculating power of a to power n/2
         return result*result;  //and multiple itself 
       
    }else{// when n is odd 
        return a*power_A(a,n-1); //it find power of n-1 and multiple with a 
       }
}



// Finding powerof a  by simple loop method 
long power_L(int a,int n){
   float result=1;
   for(int i=0;i<n;i++){ // it will multiple n times to result 
       result*=a;
   }
  return result;
}


long power_w(int a,int n){
   long result=1;
   
   if(n==0){return 1;}

   while(n>0){
    if(n%2==0){
        a=a*a;
        n=n/2;
    }else{
      result=a*result;
        n--;
    }
  
   }
  return result;  

}

int main(){

while (true)
{cout<<"Enter base value:\n";
  int a;
  cin>>a;
 cout<<"\nEnter power value\n";
   int n;
  cin>>n;

 cout<<" Result by using recursive algorithm "<<power_A(a,n);
 
 cout<<" Result by using for loop  "<<power_L(a,n);

 cout<<" Result by using while loop  "<<power_w(a,n);


 }


return 0;
}
