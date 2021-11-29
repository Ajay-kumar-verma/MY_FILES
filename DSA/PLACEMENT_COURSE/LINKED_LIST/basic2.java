import  java.util.Scanner;
;public class basic2{
    public static void main(String argd[]){
     
      // method m= new method();
     
      method.insert(3);
      method.insert(6);
      method.insert(4);
      method.insert(13);
      method.insert(26);
      method.insert(34);
      method.display();
   
      }
    
    }
    
    
    
class method{
private method(){};
static  Node head=null;


static void insert(int val){
      Node temp=new Node(val);
      System.out.println("Enter pos:"); 
      Scanner sc=new Scanner(System.in);
      
        if(head==null){
          head=temp; return;
        }
       
     temp.next=head;
      head=temp;
     }
    
    
    
static  void display(){
    
     if(head==null){
         System.out.println("Empty....!");
        return;  
      }
    Node temp=head;
    
    while(temp!=null){
      System.out.print(temp.data+"\t");
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
