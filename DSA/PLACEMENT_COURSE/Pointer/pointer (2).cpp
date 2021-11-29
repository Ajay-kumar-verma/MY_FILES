// objects always refer address not their data

#include <iostream>  
using namespace std;  
int main()  
{ 
// printing data `
 cout<<45<<endl;// just printing data
 


 int var;// declaring variable for storing data
 var=21;
//  printing data using variable 
 cout<<var<<endl;
 

// printing address
 cout<<&var<<endl; // just printing address

 int *ptr;
 ptr=&var;
//  printing address suing variable 
 cout<<ptr<<endl;
    
// printing value by using pointer variable 
cout<<*ptr;

}