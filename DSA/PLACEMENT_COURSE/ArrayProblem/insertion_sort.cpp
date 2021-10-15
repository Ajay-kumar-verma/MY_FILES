#include<iostream>
using namespace std;



void sort(int a[], int n){


 for(int i=1;i<n;i++){

  int crnt=a[i]; 
   int j=i-1;
   while(crnt>a[j] && j>=0)
     a[j+1]=a[j--];  
 
  a[++j]=crnt;
  }



for(int i=0;i<n;i++){
 cout<<a[i]<<"\t";   
}

 
 }







int main(){

 
int arr[7]={2,-4,1,56,34,23,78};

sort(arr,7);



    return 0;
}