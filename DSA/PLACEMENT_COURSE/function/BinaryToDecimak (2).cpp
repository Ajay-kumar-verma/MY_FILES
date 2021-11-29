#include<iostream>
using namespace std;

void BinToDec(int n)
{
 int dec=0;  int index=1;  int rem;
 
  while(n>0)
  {
   rem=n%10;// here we need last digit 
   if(rem>1)
     cout<<" Error"<<endl;break;
  
   dec+=rem*index;
   index*=2;
   n/=10;
  } 
 cout<<dec <<""<<endl;
}

void decToBin(int n){
long ans=0; int temp=n;
long index=1;

while(temp>0)
  {
   int r= temp%2;   //here we need to divide and get the remainder ..Not last digit 
   ans=r*index+ans;
   index*=10;
   temp/=2;
  }

cout<<ans<<endl;
}


int main(){
int n;
while (true){
    cin>>n;
    // BinToDec(n);
    decToBin(n);
}

    return 0;
}
