import java.lang.Integer;

public class wrapper {
    public static void main(String args[]){
    
 byte a= 1;
 short b=2;
 int c= 3;
 long d= 4;
 double e= 5;
 char f=77;
 boolean g= true;


// Auto  Boxing 
Byte obj1= a;
Short obj2= b;
Integer obj3= c;
Long obj4= d;
Double obj5= e;
Character obj6=f;
Boolean obj7= g;
System.out.println(obj1+" "+obj2+" "+obj3+" "+obj4+" "+obj5+" "+obj6+" "+obj7);
 
// int myInt=new int(23); Invalid declaration int in primitive datatype 




//Integer is a class We can make their object also


 Integer myInt = 23;    // this is Autoboxing   
 Integer myInts = new Integer(45); //Boxing


 // this unBoxing from object to primitive 
  int x= myInt.intValue(); //Un boxing
  int y= myInts.intValue();// Auto unBoxing
  
  
// here myInt and myInts are Object of Integer class 
System.out.println(myInt+" "+myInts);
System.out.println(x+" "+y);


    }
    
    }
    