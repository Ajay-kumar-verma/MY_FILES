#include<iostream>
using namespace std;

void amngtrait(int n){
 int sum=0;
  int temp=n;
  while (temp>0)
  { int d=temp%10;
     sum=sum+d*d*d;
     temp/=10;  
  } 
  
if(n==sum){
  cout<<"armStrong number ";  
 return;
}

cout<<"not armStrong ";

}


int main(){

//153 is armStrong number 


  int n;
  cin>>n;
  
  amngtrait(n);
    return 0;
}
