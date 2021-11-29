#include<iostream>

using namespace std;

// void max_i(int a[],int n){
// int max=a[0];
// cout<<max<<"\t";
// for(int i=1;i<n;i++){
// max=(max<a[i])?a[i]:max;
// cout<<max<<"\t";
// }

// }



void min_i(int a[],int n){
int min=a[0];
cout<<min<<"\t";

for(int i=1;i<n;i++){
min=(min>a[i])?a[i]:min;
cout<<min<<"\t";
}

}







int main(){


while(true){
cout<<"Enter size of array"<<endl;
int n;
cin>>n;
int arr[n];

for(int i=0;i<n;i++){
 cin>>arr[i];
}

cout<<endl;
// max_i(arr,n);
min_i(arr,n);
cout<<endl;
}


    return 0;
}

