public class sorted_array {
   
    public static void main(String[] args) {
        
   int ar[]={2,4,6,8,13,1,26};

   System.out.println(sort(ar,0));

    }


  public static boolean sort(int a[],int i){
  
    
  if(a.length-1==i){
    return true;
}
 if(a[i]>a[i+1]){
      return false;
 }

return sort(a,i+1); 

}  
}
