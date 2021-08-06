import java.util.Scanner;
public class array {
  static int a[]= new int[20]; 
  static Scanner sc= new Scanner(System.in);
  static int count =0;
  public static void main(String[] args) {
    for(;;){
System.out.println("Choose Any option !");
System.out.println("1\tInsert ");
System.out.println("2\tDelete ");
System.out.println("3\tsearch ");
System.out.println("4\tShow ");

int n= sc.nextInt();
switch(n){
    case 1:insert();break;
    case 2:delete();break;
    case 3:search();break;
    case 4:show();break;
    default:System.out.println("Invalid choice "); break;
}
System.out.println("\n_______________________");
    }
}
    
static  void insert(){
    System.out.println("Enter position of Element to be inserted !");
    int pos=sc.nextInt();
      if(pos<0 | pos>count){
          System.out.println("Invalid Position !");
      }else{
      System.out.println("Enter Item  to be inserted !");
      int ele = sc.nextInt();
      for(int i=count;i>pos;i--){
          a[i]=a[i-1];
      }
      a[pos]=ele;
      count++;
      System.out.println(ele+" is inserted  at position "+pos+".");    
      }


}

static void show(){
    System.out.println("Elements are :");
    for(int i=0;i<count; i++ )
     System.out.print(a[i]+" ");
    }


static void delete(){
System.out.println("Enter position of Element to delete !");
    int pos= sc.nextInt();

    if(pos>count | pos<0){
        System.out.println("Invalid postion !");
    }else{
     for(int i=pos;i<count-1;i++){
        a[i]=a[i+1];
     }count--;
     System.out.println(pos+"position element is removed ");
    }
    

}
static  void search(){
    System.out.println("Enter Element to be search !");
    int key = sc.nextInt();
     boolean flag=false; int i;
    for(i=0;i<count;i++){
    if(a[i]==key){ flag=true;  break;} 
    }
  if(flag){
      System.out.println(key+" is found at position "+i);
  }else{
      System.out.println(key+" is not there in List !");
  }


}

}
