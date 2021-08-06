public class poly {
   
public static void main(String[] args) {
main();
System.out.println(num());

hello("A");
hello("AJAY");
}    

//It's good and sensitive Example    
//it is method overloading and polymorphism 

public static void main() {
    
    System.out.println("This is main method !");
}


// public static String num(){
//     return "Ajay";
//     }
    

// polymorphism can't achieved by different return type

public static int num(){
       return 1;
        }
        
public static void hello(int a){
System.out.println(a);
} 

public static void hello(String str) {
    
    System.out.println(str);
}



}
