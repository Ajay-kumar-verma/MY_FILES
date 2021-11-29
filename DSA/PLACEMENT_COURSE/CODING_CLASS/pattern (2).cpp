#include<iostream>
using namespace std;

int main(){
  
int n;  
while(true){
cout<<"Enter n:"<<endl;
cin>>n;
for(int i=0;i<n;i++){ // this is for rows // how many rows want to print 
  for(int j=0;j<n-i-1;j++)
   cout<<" A ";
  for(int j=0;j<i+1;j++){
  
   char ch=i+'A';
  cout<<" "<<ch<<" ";
  }
   cout<<endl;

}

}


    return 0;
}