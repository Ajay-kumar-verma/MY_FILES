public class genericClass{
 
public static void main(String[] args) {
 Node<Integer> node= new Node();
 node.x=34;
 node.y=56;
 node.sum();



 Node<String> info= new Node();
 info.x="Ajay";
 info.y="vikash";
 info.sum();


}

}






class Node<T>{
   T x;
   T y;

void sum(){
    System.out.println(x+" "+y);
}
    

}

