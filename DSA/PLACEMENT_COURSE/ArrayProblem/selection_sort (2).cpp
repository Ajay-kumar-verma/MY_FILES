#include<iostream>

using namespace std;

void sort(int a[],int n){


for(int i=0;i<n;i++){
       int min=i;
   for(int j=i+1;j<n;j++){
   
     if(a[min]>a[j])
        min=j;
   }

  int temp=a[min];
  a[min]=a[i];
  a[i]=temp;

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