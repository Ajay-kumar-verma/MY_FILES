public class basic1{

public static void main(String argd[]){

    // System.out.println("Hello world");

   method m= new method();
  
  m.insert(3);
  m.insert(6);
  m.insert(4);
  m.display();

}

}



class method{
 Node head=null;

 void insert(int val){
   Node temp=new Node(val);

    if(this.head==null){
        head=temp; return;
    }
   
 temp.next=head;
  this.head=temp;
 }



 void display(){

 if(this.head==null){
     System.out.println("Empty....!");
    return;  
  }
Node temp=head;

while(temp!=null){
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


