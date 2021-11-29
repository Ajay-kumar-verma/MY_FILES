#include<iostream>
using namespace std;

long fact(int n){
 if(n==0) return 1;
  return n*(fact(n-1));

}


int main()
{ 
 
 while(true){
     
cout<<"Enter number :"<<endl;
 int n;
 cin>>n;
cout<<"Factorial is "<<fact(n)<<endl;
 }



return 0;
}
