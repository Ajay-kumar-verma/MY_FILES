import java.util.*;
public class array {

static Scanner sc= new Scanner(System.in);
static int ar[]=new int[20];
static int n=0;
// it represent count of val
// INITIALLY  ARRAY IS EMPTY
public static void main(String[] args){

for(;;){
   System.out.println("1  insert"); 
   System.out.println("2  delete");
   System.out.println("3  sort");
   System.out.println("4  search");
   System.out.println("5  display");
   int ch=sc.nextInt();

   switch(ch){
       case 1:insert();break;
       case 2:delete();break;
       case 3:sort();break;
       case 4:search();break;
       case 5:display();break;
       default:System.out.println("Invalid choice ");
           }


}

}



public static void insert(){
    int pos;
   do
   {
     System.out.print("INSERT AT POS: ");
     pos=sc.nextInt();
    }while(pos > n); 
  
  //  COUNT - 1 IS INDEX OF ELEMENT
   for(int i=n-1;i>=pos;i--){
    ar[i+1]=ar[i];   
   }

  System.out.print("ENTER VAL : ");
  ar[pos]=sc.nextInt();  
  n++;
  return;
}



public static void delete(){
  if(n==0){
    System.out.println("Array Empty ..!");
    return;
  }
  int pos;
  do{
  System.out.print("Enter pos : ");
  pos=sc.nextInt();
  }while(pos > n-1);

  System.out.println(ar[pos]+" is Deleted ..!");   
  for(int i=pos;i<n-1;i++){
  ar[i]=ar[i+1];
}
n--;

}


// SORTING FUNCTION 
public static void sort(){
    System.out.println("UNDER DEVEPMENT...!");
}



// SEARCHING FUNCTION  
public static void search(){
    System.out.println("ENTER KEY : ");
    int key = sc.nextInt();
     int found=-1;
   for(int i=0;i<n;i++)
   {
     if(key==ar[i])
     {
        found=i;
        break;
     }
   } 
  
if(found==n)
    System.out.println(key+" is not found...!");
else
    System.out.println(key+" is found at pos "+(found+1));

}






// DISPLAYING VALUE 
public static void display(){
  if(n==0){
    System.out.println("Array is Empty..!");  
    return;
   }

 System.out.println("VALUSES ARE : ");
 for(int i=0;i<n;i++){
    System.out.print(ar[i]+"\t");
}
System.out.println("\n");
}


}
