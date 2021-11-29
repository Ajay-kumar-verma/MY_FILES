import java.util.Scanner;

public class list {
   public static void main(String[] args) {

 
// Scanner sc= new Scanner(System.in);

// Node list=new Node(3);
 Node head=null;
method l=new method();

l.insert(3);
l.insert(5);
l.insert(6);
l.insert(8);
l.display();

    }

}

class method{
   void insert( Node head,int val){
  Node temp=new Node(val); 
   if(head==null){
       head=temp;
       return ;
   }
   head.next=temp;
   head=temp;
   
}  


 void display(head){


    if(head==null){
      System.out.println("List is empty....");
       return;
    }

     Node temp=head;

     while (temp!=null) {
     System.out.println(temp.data+"\t");
    temp=temp.next;
     }


}





}













class Node{
int data;
Node next=null;

Node(int val){
    this.data=val;
}

}

