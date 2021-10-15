#include<iostream>
using namespace std;
int main(){
while(true)
{
 cout<<"Enter Number "<<endl;
 int n;
 cin>>n;
 int i=1;


 while(true){
 int sum=i*(i+1)/2;
 if(sum==n){
    cout<<"Number is triangular"<<endl;;
  break;
}
if(sum>n){
 cout<<"Not triangular number "<<endl;
 break;
}
i++;
}


cout<<"NO of iteration "<<i-1<<endl;

}


    return 0;
}
 