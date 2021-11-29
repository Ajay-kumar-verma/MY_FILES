#include<iostream>
using namespace std;
void swapping(int &a, int &b) {         //swap the content of a and b
   int temp;
   temp = a;
   a = b;
   b = temp;
}
void selectionSort(int *array, int size) {
   int i, j, imin;
   for(i = 0; i<size-1; i++) {
      imin = i;   //get index of minimum data
      for(j = i+1; j<size; j++)
         if(array[j] < array[imin])
            imin = j;
         //placing in correct position
         swap(array[i], array[imin]);
   }
}
// MAIN FUNCTION .....
int main() {
   int n=11;
   int arr[n]={12,5,99,34,23,19,33,2,90,15,45};          
  
   selectionSort(arr, n);
   cout << "SORTED ARRAY :  ";

   for(int i = 0; i<n; i++)
      cout << arr[i] << " ";
   cout << endl;  
}