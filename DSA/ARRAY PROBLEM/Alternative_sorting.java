
import java.util.Arrays;
public class Alternative_sorting {
    
public static void main(String []args){
 int ar[]={4,5,3,6,8,13,2,1,15,19};
 
//  int n = ar.length;
//  AlternativeString.alternateSort(ar, n);



  int max=0;
  int min=0;
for(int j=0;j<ar.length;j+=2){

  for(int i=j;i<ar.length;i++){
     max=(ar[max]<ar[i])?i:max; 
     min=(ar[min] > ar[i])?i:min; 
    }
  
    int temp=ar[j];
    ar[j]=ar[max];
    ar[max]=temp;   
   
    temp=ar[j+1];
    ar[j+1]=ar[min];
    ar[min]=temp;   
 
    

}
for (int e:ar)
    System.out.print(e+"\t");

}

}




  
class AlternativeString
{
    // Function to print alternate sorted values
    static void alternateSort(int arr[], int n)
    {
        Arrays.sort(arr);
 
        // Printing the last element of array
        // first and then first element and then
        // second last element and then second
        // element and so on.
        int i = 0, j = n-1;
        while (i < j) {
            System.out.print(arr[j--] + " ");
            System.out.print(arr[i++] + " ");
        }
      
        // If the total element in array is odd
        // then print the last middle element.
        if (n % 2 != 0)
            System.out.print(arr[i]);
    }
 
    /* Driver program to test above functions */
    public static void main (String[] args)
    {
        int arr[] = {1, 12, 4, 6, 7, 10};
        int n = arr.length;
        alternateSort(arr, n);
    }
}