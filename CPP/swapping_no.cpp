#include<iostream>

using namespace std;

void swap(int* a,int* b){
 int temp= *a;
 *a=*b; 
 *b=temp;
}

int main(){

int x=3;
int y=2;

swap(&x,&y);

cout<<x<<"\t"<<y<<endl;

    return 0;
}