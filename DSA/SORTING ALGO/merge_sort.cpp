#include<iostream>
using namespace std;

//  this is for swapping numbers 
void swapping(int &a, int &b) {    
  int temp;
  temp = a;
  a = b;
  b = temp;
}


//  MERGING   FUNCTION ..... 
void merge(int *ar, int l, int m, int r)
{
   int i, j, k, nl, nr;
    nl = m-l+1; nr = r-m;
   int larr[nl], rarr[nr];
  
   for(i = 0; i<nl; i++)
      larr[i] = ar[l+i];
   for(j = 0; j<nr; j++)
      rarr[j] = ar[m+1+j];
   i = 0; j = 0; k = l;
   
   while(i < nl && j<nr)
    {
      if(larr[i] <= rarr[j])
      {
         ar[k] = larr[i];
         i++;
      }
      else
      {
         ar[k] = rarr[j];
         j++;
      }
      k++;
   }
   while(i<nl)
   {      
      ar[k] = larr[i];
      i++; k++;
   }
   while(j<nr)
   {    
      ar[k] = rarr[j];
      j++; k++;
   }
}


//  SORTING FUNCTION ..... 
void mergeSort(int *arr, int l, int r)
{
   int m;
   if(l < r)
    {
      int m = l+(r-l)/2;
      // Sort first and second arrays
      mergeSort(arr, l, m);
      mergeSort(arr, m+1, r);
      merge(arr, l, m, r);
   }
}

int main()
{
   int n=11;
   int arr[n]={12,5,99,34,23,19,33,2,90,15,45};     
   
   mergeSort(arr, 0, n-1);     
   cout << "Sorted Array :  ";
 
   for(int i = 0; i<n; i++)
    cout<<arr[i] << " ";
   cout << endl;
}