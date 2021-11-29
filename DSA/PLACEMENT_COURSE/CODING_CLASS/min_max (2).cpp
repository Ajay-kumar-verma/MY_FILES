#include<iostream>
#include<cmath>
using namespace std;

int main(){

 while(true){   
int a,b;
cin>>a>>b;

int sum=a+b;
int dif=abs(a-b);

int max=(sum+dif)/2;
int min=(sum-dif)/2;
cout<<"Min value is :"<<min<<endl<<"Max value is : "<<max<<endl;

 }

    return 0; 
}