public class BinaryTree{

public static void main(String[] args) {

// System.out.println("Hello ");

m.insert(3);
m.insert(55);
m.insert(13);

m.insert(-3);
m.insert(-5);
m.insert(-63);


m.display();
} 

}

class m{
    private m(){};
 
static Node root=null;



static void insert(int val){
     Node temp=new Node(val);

   if(root==null){
       root=temp;
     return;
     }
 
     Node cur = root;
     Node prev=root;

   while(cur!=null){
    prev=cur;
     
   if(cur.data > val)
         cur=cur.left;
   else
    cur=cur.right;   
   

}
      
if(prev.data > val)
prev.left=temp;

else
prev.right=temp;




}


static void  display(){

    if(root==null){
    System.out.println("Empty tree ...!");
    return ;
    }

Node temp =root;
  
while(temp!=null){
    System.out.print(temp.data+"\t");
    temp=temp.left;
  

}


}




}





class Node{

int data;

Node left=null;
Node right=null;
Node(int val){
    this.data=val;
}

}


