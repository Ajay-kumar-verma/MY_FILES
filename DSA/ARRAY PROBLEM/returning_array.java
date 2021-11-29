public class returning_array {
    
public static void main(String args[])
{
int arr[]=get_array();
for (int i : arr) {
    System.out.print(i+" ");
}

}

// Array returning ...
static int[] get_array(){
int ar[]={3,5,4,2,3,1,7};

 return ar;
} 


}
