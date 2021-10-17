#include<iostream>

using namespace std;

int fibo(int n){
    if(n==0 || n==1)
    {
            return n;
    }

 return  fibo(n-1)+fibo(n-2);
}



int main(){

cout<<"Enter numner base  = :";
int n;
cin>>n;

if(n<0){ 
 cout<<endl;
 main();
}
for (int i=0;i<=n;i++)
{
    cout<<fibo(i);
    cout<<"\t";
}

cout<<endl;
main();


    return 0;
}