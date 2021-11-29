public class rotation {
   
public static void main(String args[])
{
int arr[]={1,2,3,4,5,6,7,8,9};
 int n=9;
int r=4;

int temp[]=new int[r];

for(int i=0;i<r;i++){
   temp[i]=arr[i];
}

for(int i=0;i<n-r;i++){
   arr[i] =arr[i+r];
}

int j=0;
for(int i=n-r;i<n;i++){
  arr[i] =temp[j++];
}

for (int i : arr) {
    System.out.print(i+" ");
}



}


}
