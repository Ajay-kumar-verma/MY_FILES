import java.io.FileInputStream;

public class ecptn {
 
public static void main(String[] args) {
try{
    // FileInputStream fs= new FileInputStream("d:/at.txt");// exception may occur you should handle it 
    // int a=0;
    // int b=89;
    // int c=b/a;
 //  it is run time Exception  NOT compile time


   String str=null;
   System.out.println(str.length());
}  
catch(Exception e){

  e.printStackTrace();
  System.out.println(e.getMessage());
  System.out.println(e.toString());
  System.out.println(e);
}
finally{
    System.out.println("This is finally block !");
}





}

}
