public class encapsulation {
    
public static void main(String args[]){

    data obj= new data();
  obj.setId(3452);
  obj.setPswd("AJAY!@#/");
System.out.println(obj.getId()+" "+obj.getPswd());

}


}

class data{
private int id;
private String pswd;

void setId(int id){
    this.id=id;
}
 void setPswd(String pswd){
    this.pswd=pswd;
 }

 int getId(){
     return this.id;
 }


 String getPswd(){
     return this.pswd;
 }

}
