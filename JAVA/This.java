public class This {
  static int no;
    This(int no){
        this.no=no;// this is used when variables name are same 
    }

 This(int n1,int n2){
     no=n1+n2;// no need this keyword becoz variables names are different
 }   
public static void main(String []args){
This ob1= new This(45);
System.out.println(ob1.no);

This ob2= new This(45,56);
System.out.println(ob2.no);
 



}

}
