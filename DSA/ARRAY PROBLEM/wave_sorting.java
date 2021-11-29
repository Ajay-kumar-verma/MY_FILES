import java.util.*;
public class wave_sorting {
    
    public static void main(String args[])
    {
        int arr[] = {10, 90, 49, 2, 1, 5, 23};
        int n = arr.length;
        sortInWave(arr, n);
        for (int i : arr)
            System.out.print(i + " ");
    }
   

   static void sortInWave(int arr[], int n)
    {
        Arrays.sort(arr);
    for (int i=0; i<n-1; i += 2)
      {
          int temp=arr[i];
          arr[i]=arr[i+1];
          arr[i+1]=temp;
      } 
      


 
 
    }
 
 

}
