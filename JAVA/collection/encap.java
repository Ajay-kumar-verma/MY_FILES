
import java.util.Scanner;



public class encap {
    
public static void main(String[] args) {

    

while(true){
encapsul mthd= new encapsul();
   if(mthd.setter()){
    mthd.getter();
   }
  
}

}

}




 class encapsul{

Scanner sc= new Scanner(System.in);

private String name;
private String id;
private int age;


  public boolean setter(){
System.out.println("Enter  your  age ");
 age= this.sc.nextInt(); // it move th ecurser to just towords right
 if(age<18){
     System.out.println("Your are not elligible for this ");
     return  false;
 }
 sc.nextLine();
 System.out.println("Enter your name ");
 name= this.sc.nextLine();
System.out.println("Enter your id");
id=this.sc.nextLine();
System.out.println("Thank you :)");
return true;
}

public void getter(){
System.out.println(this.age);
System.out.println(this.name);
System.out.println(this.id);

}




}


