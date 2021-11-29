#include<iostream>
using namespace std;

int main(){
int n;
cout << "Enter size of array:"<<endl;
cin>>n;
int a[n];

for(int i=0;i<n;i++){
    cin>>a[i];
}


for(int i=0;i<n;i++){
    cout<<a[i]<<"\t";
}



    return 0;
}