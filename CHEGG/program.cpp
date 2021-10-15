#include<iostream>
using namespace std;
// main method 
int main(){

// integral Array
int  intNumbers[10]={3,4,2,3,29,23,45,65,32,78};

//initizing txtLowest array
int txtLowest=intNumbers[0];


// this loop will iterate for whole array 
for(int i=1;i<10;i++)
 {
     if(txtLowest>intNumbers[i])
        txtLowest=intNumbers[i];
 }
 // printing output 
 cout<<"Lowest number is :"<<txtLowest<<endl;
    return 0;
}