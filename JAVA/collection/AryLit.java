import java.util.*;
// All collection are there in java.util pakacge 

public class AryLit {
public static void main(String[] args) {
//   //This is how we can define ArrayList with generic and use this with thier inbuilt method  
// // ArrayList<Integer> ary= new ArrayList();
// List<Integer> ary =new ArrayList();

// // Like that we can use ArrayList LinkedList Vector and Stack 

// ary.add(565);
// ary.add(34);
// ary.add(123);
// ary.add(1, 45); 
// // get method is use for get the element at certain index 
// System.out.println(ary.get(3));
// System.out.println(ary.contains(77));
// System.out.println(ary.isEmpty());
// // System.out.println(ary.remove(34));
// System.out.println(ary.size());
// System.out.println(ary.toString());

// for(int x:ary){
//     System.out.println(x);
// }

Stack<String> stck= new Stack();
stck.push("Ajay");
stck.push("Rakesh");
stck.push("675");
System.out.println(stck.pop()+" "+stck.peek()+" "+stck.pop());
//pop delete top of the element and return that element 
// peep only show the last element 


Stack stack = new Stack();

stack.push(234);
stack.push("Ajay");
System.out.println(stack.pop()+" "+stack.pop());


// if we dont declare Object type we can insert anything datatye in stack


}    
}
