#include<iostream>
using namespace std;

void fib(int n)
{ int a=0;
  int b=1;
  cout<<a<<"\t"<<b<<"\t";
 for(int i=3;i<=n;i++)
 {
  int sum=a+b;
  cout<<sum<<"\t";
   a=b; b=sum;  
 }
cout<<endl;
}




int main(){

 while(true){
     cout<<"Enter numner for fib:"<<endl;
 int n; cin>>n;
 fib(n);
 
 }
    return 0;
}