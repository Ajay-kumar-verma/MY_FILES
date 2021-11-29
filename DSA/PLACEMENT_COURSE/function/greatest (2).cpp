#include<iostream>
using namespace std;

int max(int a,int b){return (a>=b)?a:b;}

int main(){
 int x,y,z;
 while(true){
 cout<<"Enter three numbers:"<<endl;
 cin>> x >> y >> z;
 cout<<max(x,max(y,z))<<endl;

 }


    return 0;
}