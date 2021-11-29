#include <iostream>
using namespace std;

//insertion sort function 
 void insertion_sort(int  arr[],int n)
 {
     
for(int i=1;i<n;i++) //iterating 1 to n-1 
{
int current =arr[i];//intially current ele taking first ele of array 
int j=i-1;  // j which is one less than i 

// while loop it will execute till ocndtion is true 
while(arr[j]>current && j>=0)
{
  arr[j+1]=arr[j];
  j--;
}
arr[j+1]=current;
}
 }


//Tis is main function 
int main()
{
 cout<<"Enter size of array ."<<"\n";
 int n; //size of an array 
 cin>>n;
 int arr[n];


// taking array  elemenst 
for(int i=0;i<n;i++)
{
    cin>>arr[i];
}

// calling function 
// array can be trated as a pointer 
  insertion_sort(arr,n);

// priting outpur
  for(int i=0;i<n;i++){
    cout<<arr[i]<<"\t";
}

    return 0;
}