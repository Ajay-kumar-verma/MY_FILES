#include <iostream>

using namespace std;


void swap(int *a,int *b){
*a=*a+*b;
*b=*a-*b;
*a=*a-*b;
}

int main(){

int x;
x=4;
int y;
y=5;


swap(&x,&y);

// we are not printing 4 and 5 here 
// we are printing available value at addressof x and y 
cout<<"x = : "<<x<<endl;
cout<<"y = : "<<y<<endl;




    return 0;
}