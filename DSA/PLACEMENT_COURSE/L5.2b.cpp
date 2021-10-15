#include<iostream>
using namespace std;


void palindrome(int n){
  int num=0;
  int rem=n;
  while(rem>0){
   int last_digit=rem%10; 
   num=num*10+last_digit;  
     
    
     rem/=10;

   }

 cout<<num;

}



int main(){
 cout<<"Enter no.";
 int n;
 cin>>n;
 palindrome(n);

    return 0;
}