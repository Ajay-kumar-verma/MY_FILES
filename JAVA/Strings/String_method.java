public class String_method {
    
public static void main(String[] args) {
    
// ==  operator is used to reference comparision or (Address comparision )

// .equals() method is used for content or value comparision 


String name1=new String("Ajay");
String name2=new String("Ajay");
 
System.out.println(name1==name2);// False
//Both object to diferent area 


String name3="Vikash";
String name4="Vikash";


System.out.println(name3==name4); // true
// Here both rfere to same address  

System.out.println("\n");


// It check only values  or addression  of scp area 
System.out.println(name1.equals(name2)); // it check only values 
  
System.out.println(name3.equals(name4)); // It check only values 



}

}
