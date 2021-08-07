public class Arrays {
 
  public static void main(String[] args) {
   
    // Arrays are used to store multiple values in a single variable

    // declaration 
    int ar[]={2,4,5,7,8};
    ar[0]=899;
    // length is property 
    String[] str={"Ajay","Vikash","Sachin","Kashyap"};
  System.out.println(ar[0]+"\n"+str.length);


// Loping an array 

for(int i=0;i<str.length;i++){
    System.out.println(ar[i]);
}
// forEach loop 

for(String name:str){
    System.out.println(name);
}


  } 
    
    
}
