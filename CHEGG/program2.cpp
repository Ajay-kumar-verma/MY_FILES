#include<iostream>
using namespace std;
// main function 
int main(){
// array declration 
string  strStudentNames[20];
cout<<"Enter Names for array:"<<endl;
// for geetingf name from user 
for(int i=0;i<20;i++)
       cin>>strStudentNames[i];
  

// printing output 
cout<<"Output:"<<endl;
 for(int i=0;i<20;i++)
       cout<<strStudentNames[i]<<"\t";

    return 0;

}
