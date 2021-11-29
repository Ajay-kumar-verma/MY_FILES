#include<iostream>
using namespace std;

int main(){
  
//  Main is a function that can be called again and again 

 static int a=4;

if(a>0){
 cout<<a--<<endl;
 main();
 
}
   
  
    return 0;
}