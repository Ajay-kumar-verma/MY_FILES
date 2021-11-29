#include<iostream>
#include<cmath>
using namespace std;


// this  is for getting triplet 
int * triplet(int n)
{
   static int ans[99]; // this is for stroing data or triplet 
   int index=0;
     
  for(int i=1;i<=n;i++)
  {
 
     for(int j=i;j<=n;j++)
     {                      
      int x=i*i+j*j;
      int y=sqrt(x);  // sqrt is for getting squareroot of x 
      if(y*y==x && y<=n)  // if condition satisfied then triplet data will asigned to an array
       {
         ans[index++]=i;
         ans[index++]=j;
         ans[index++]=y;
                   
       } 

      }

  }
return ans; // returning ans

}
// this is main function 
int main(){
while(1)
{
cout<<"Enter n:"<<endl;
int n;
cin>>n;      // n input from user 
int *ans =triplet(n);  // calling function and getting ans of list
  // printing output
  for(int i=0;i<100;i=i+3)
   {
    if(*(ans+i)==0) break;

     cout<<"a: "<<*(ans+i);
     cout<<" b: "<<*(ans+i+1);
     cout<<" b: "<<*(ans+i+2);

     cout<<endl;
   }
}
   return 0;
}