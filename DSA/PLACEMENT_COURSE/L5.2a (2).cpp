#include<iostream>
#include<cmath>
using namespace std;


bool prime(int n)
{

  for(int i=2;i<=sqrt(n);i++)
      if(n%i==0)
       return true;

 return false;   
}


int main(){
while(true){
  cout<<"Enter number.."<<endl;
  int n;
  cin>>n;

   if(prime(n))
   {
    cout<<"Given number is prime number :"<<endl;
   }
   else
   {
    cout<<"Given number is not a prime number :"<<endl;
   }
}
    return 0;
}

