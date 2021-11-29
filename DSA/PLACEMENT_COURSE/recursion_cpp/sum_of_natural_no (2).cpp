#include<iostream>

using namespace std;


int sum(int n){
 
if(n==0){return 0;}

int prev_sum=sum(n-1);
return n+prev_sum;
}



int main(){

cout<<"Enter numner = :";
int n;
cin>>n;
cout<<"Sum of natural number is = : "<<sum(n)<<endl;;
main();

    return 0;
}