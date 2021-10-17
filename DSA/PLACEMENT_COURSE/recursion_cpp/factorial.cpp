#include<iostream>

using namespace std;

 double  fact(int n){

if(n==0 || n==1 ) {return 1;}
  double prev_fact=fact(n-1);

  return prev_fact*n;


}


int main(){

cout<<"Enter numner  = :";
int n;
cin>>n;
if(n<0){main();}

cout<<"Factorial of "<< n <<" is = : "<<fact(n)<<endl;;;
main();

    return 0;
}