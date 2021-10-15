#include<iostream>
#include<cmath>
using namespace std;

bool isPrime(int n){
      for(int i=2;i<=sqrt(n);i++){
         if(n%i==0)
           return false; 
      
      }
    return true;
}


int main(){
 while(true){
     cout<<"Enter first number:"<<endl;
int a;cin>>a;
cout<<"Enter Second number:"<<endl;
int b;cin>>b;

cout<<"Prime number between "<<a<<" and "<<b<<"are:"<<endl;
 for(int i=a;i<=b;i++){
   
   if(isPrime(i))
       cout<<i<<"\t";
  }

 cout<<endl;

 }



    return 0;
}
