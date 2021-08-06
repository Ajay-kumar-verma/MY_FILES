
import java.util.Scanner;
public class classarray{
   
   static  Scanner sc= new Scanner(System.in);
   static info[] a= new info[6];
   static int  count =0;
   
   // As we declare array like that we can declare Array of Any Object 
   // a will allocate memory for store info type class 
   // for int initilize with 0, here it will initialize with null
   public static void main(String args[]) {
//   a[0].no // it is null point exception 
  while(true){
  System.out.println("Enter choice ");
  System.out.println("1\tinsert");
  System.out.println("2\tdisplay");
  int n= sc.nextInt();
    switch(n){
        case 1: insert();break;
        case 2:display();break;
      default:System.out.println("Invalid choice");
  }   
}


     
    }

static void insert(){
   if(count==10){
      System.out.println("Memory full");
    return;
   }
info node = new info();
System.out.println("Enter name ");
node.name=sc.next();
System.out.println("Enter number");
node.no=sc.nextInt();
a[count++]=node;
 return;
}

static void display(){
   System.out.println("Name \t Number");
for(int i=0;i<count;i++){
   System.out.print(a[i].name+" \t "+a[i].no);
  
}
System.out.println();
   return;
}


}


class info{
  String name;
   int no;
}



   