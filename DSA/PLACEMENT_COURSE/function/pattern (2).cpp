#include<iostream>
using namespace std;

void ptn(int n){
 
 for(int i=1;i<=n;i++){

     for(int j=1;j<=i;j++){
         cout<<" * ";
     }
     cout<<endl;
 }


}


int main(){
int n;
while(true){
cout<<"Enter n:"<<endl;
cin>>n;
ptn(n);
}

  

    return 0;
}
