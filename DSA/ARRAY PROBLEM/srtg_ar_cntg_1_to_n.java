// import java.util.*;
public class srtg_ar_cntg_1_to_n {
    
public static void main(String [] args){

int ar[]={1,4,3,2,6,5,7,10,9,8};

// Arrays.sort(ar);


sort(ar,ar.length);

for(int e:ar){
    System.out.print(e+" ");
}
    
}

static void sort(int a[],int n){
for(int i=0;i<n;i++){
    a[i]=i+1;
}  

   
}

}
