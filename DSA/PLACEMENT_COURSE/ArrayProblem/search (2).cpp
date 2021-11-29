#include<iostream>
using namespace std;



// THIS IS CALLED LINEAR SEARCH 
// int  search(int a[],int n,int key){
// for(int i=0;i<n;i++){
//  if(a[i]==key)
//     return i;
//   }
//  return -1;

// }

// BINAR SEARCH
int  search(int a[],int n,int key)
{
 int s=0;
 int e=n-1;

 while(s<=e){
 int mid=(s+e)/2; 
 
 if(a[mid]==key)
     return mid;
 
 else if(a[mid]>key)
     e=mid-1;

 else
     s=mid+1;

}
return -1;
}



int main(){

int a[6]={3,4,5,6,7,8};

int pos=search(a,6,4);

 if(pos==-1){
   cout<<"Elememt NOT   found..!";  
 }
 else{
cout<<"Elements  found at "<<pos+1<<endl;
 }

    return 0;
} 