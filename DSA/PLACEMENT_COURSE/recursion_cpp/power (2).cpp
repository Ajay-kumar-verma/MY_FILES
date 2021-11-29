#include<iostream>

using namespace std;

long power(int a,int n){

if(n==0){return 1;}

long prev_power=power(a,n-1);

return a*prev_power;
}


int main(){

cout<<"Enter numner base  = :";
int a; cin>>a;

cout<<"Enter numner power  = :";
int n; cin>>n;

if(n<0){ main();}

cout<< a <<" to power "<< n << " is = : "<<power(a,n)<<endl;;
main();



    return 0;
}