public class abstraction {
    public static void main(String args[]){

  bike  obj= new pulser();
  obj.running();


    }
    
}


abstract class bike{

void run();
abstract void running();

}


class pulser extends bike{

    void running(){
        System.out.println("Bike is running "); 
    }

}

