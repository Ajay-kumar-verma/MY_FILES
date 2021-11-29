#include<iostream>

using namespace std;

void Max_Min(int a[],int n){

 int min=a[0];
 int max=a[0];

for(int i=0;i<n;i++){
  min=(min>a[i])?a[i]:min;
  max=(max<a[i])?a[i]:max;
}

cout<<min<<endl<<max<<endl;


}


int main(){

 int a[7]={3,4,5,45,2,-23,6};

 Max_Min(a,7);

    return 0;
}
