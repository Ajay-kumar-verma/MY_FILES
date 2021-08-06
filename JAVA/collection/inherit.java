class animal{

    public  void eat() {
        System.out.println("I am eating .");
    }

}


// We can use variable and method of other class  using 
// inheitance .if not there in current class

// private method and constructor can't be called 

public class inherit extends animal {
   
    // public void eat() {
    //     System.out.println("I am eating samjha .");
    // }


public static void main(String[] args) {
    
inherit dogs=new inherit();

 dogs.eat();

}

}
