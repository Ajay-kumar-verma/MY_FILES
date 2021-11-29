#include<iostream>
using namespace std;

class series{


public:
long natural(int n){
 return (n<0)?-1:(n*(n+1)/2);
}
long fact(int n){return n<=0?1:(n*fact(n-1));}

long sin(){
 
float sum=1;
float temp;
int sign=-1;
int i=1;


do{
temp=i/fact(i);
cout<<fact(i);
sign=(sign>0)?-1:1;
i++;
}while(temp>0.0001);

return sum;
}


};




int main(){
series summ;
series *sum=&summ;

cout<<"Enter n value.."<<endl;
int n;
cin>>n;
cout<<sum->natural(n)<<endl; 

cout<<"Sine value is ::"<<sum->sin()<<endl;


main();
    return 0;
}