#include<iostream>
using namespace std;

// SORTING ALGORITHM
void bubbleSort(int *array, int size)
 {
   for(int i = 0; i<size; i++)
    {
      int swaps = 0;         
      for(int j = 0; j<size-i-1; j++)
       {
         if(array[j] > array[j+1])
         {       
          int temp=array[j];
          array[j]=array[j+1];
          array[j+1]=temp;
          
            swaps = 1;    
         }
      }
      if(!swaps)
         break;     
         
       }
}



// MAIN FUNCTION 
int main()
 {
   int n=11;
   int arr[n]={12,5,99,34,23,19,33,2,90,15,45};     
   
   bubbleSort(arr, n);
   cout << "SORTED ARRAY : ";

for(int i = 0; i<n; i++)
      cout << arr[i] << " ";
   cout << endl;
}