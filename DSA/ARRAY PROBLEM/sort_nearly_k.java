public class sort_nearly_k {
 
public static void main(String [] args){
int ar[]={3,5,6,7,9,11,23,25};
int count=0;
 for(int i=1;i<ar.length;i++){
  
    int key=ar[i];
    int j=i-1;

  while(key < ar[j] && j>=0){
    ar[j+1]=ar[j];
    j--;
    count++;
  }
  ar[++j]=key;

 }

for(int e:ar){
    System.out.print(e+"\t");
}

System.out.println(count+" ");

}

}
