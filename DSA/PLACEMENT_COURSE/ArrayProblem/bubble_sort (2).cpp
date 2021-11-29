#include<iostream>
using namespace std;

void sort(int a[],int n){

for(int i=0;i<n;i++){
    for(int j=i;j<n-1;j++){
      if(a[j]>a[j+1]){
      int temp=a[j];
      a[j]=a[j+1];
      a[j+1]=temp;
      }

    }
}



for(int i=0;i<n;i++)
 cout<<a[i]<<"\t";   


}



int main(){

int arr[7]={2,-4,1,56,34,23,78};

sort(arr,7);
    return 0;
}