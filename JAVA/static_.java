public class static_ {
    
int usn;
String name;
static String   class_;

public static void main(String args[]){

  static_.class_="6A";
  static_ obj1= new static_();
   obj1.usn=454;
   obj1.name="AJAY";

   static_ obj2= new static_();
   obj2.usn=4454;
   obj2.name="VIKASH";

   static_ obj3= new static_();
   obj3.usn=4546;
   obj3.name="VIJAY";

   System.out.println(obj1.usn+" "+obj1.name+" "+obj1.class_);
   System.out.println(obj2.usn+" "+obj2.name+" "+obj2.class_);
   System.out.println(obj3.usn+" "+obj3.name+" "+obj3.class_);



}
 
}
