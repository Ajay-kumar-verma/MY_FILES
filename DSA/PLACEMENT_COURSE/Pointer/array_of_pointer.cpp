#include<iostream>

using namespace std;

int main(){

int a[5]={3,4,1,5,6};
// here a is a array of 5 ele and 
// a has addrss of first ele 
// a can be treated as a pointer  

cout<<"Address of a :"<<a<<endl;

cout<<"value of a[0] :"<<*a<<endl;

cout<<"value of a[1] :"<<*(a+1)<<endl;

cout<<"value of a[1] :"<<*(a+2)<<endl;

cout<<"value of a[1] :"<<*(a+3)<<endl;


// for(int i=0;i<5;i++){
//    cout<<*(a+i)<<endl;
// }

int *ptr=a;

for(int i=0;i<5;i++){
   cout<<*ptr<<endl;
 ptr++;
}


    return 0;
}