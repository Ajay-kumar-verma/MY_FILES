#include<iostream>
using namespace std;
//declaring swapping function 
// it swap the ele at  i to j and j to i 
void swap(int arr[],int i,int j){
    int temp=arr[i]; //assigning ith ele in temp
    arr[i]=arr[j];  //assigning jth to ith pos
    arr[j]=temp;  //assigning temp to jth pos

}


// this function is fro partition 
int partition(int arr[],int l,int r){
int pivot =arr[r];//assing rth ele to pivot 
int i=l-1; //decreseing l by one


for(int j=l;j<r;j++){
    if(arr[j]<pivot){ //if condition true arr ele will gets swapped
      i++;
      swap(arr,i,j);  
    }
}
swap(arr,i+1,r); //After for loop array ele gets swapped  
return i+1;    // return i+1
}

//Quick sort algorithm  
void quickSort(int arr[],int l,int r){

 if(l<r){ // it wil execute till 'l' become greater than or equal to 'r'
 int pi=partition(arr,l,r); 

quickSort(arr,l,pi-1);//calling swap function 
quickSort(arr,pi+1,r); //calling swap function 
       
  }  
}


// This is main function 
int main(){

// Initially i declraed you can get also from 
// user 
int ar[8]={4,-2,3,-1,7,-3,8,2};

quickSort(ar,0,7); // Calling quick sort function 

// printing 
for(int i=0;i<8;i++){
    cout<<ar[i]<<"\t";
}


return 0;
}