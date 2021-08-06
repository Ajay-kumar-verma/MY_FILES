public class this_{
 
    int x=456;

void show(){
    System.out.println(x);
}
void display(){
    show();
}

//Once Object is created all the member and function
//can be accessed without making 
//object ,from inside the class like Static method 
//if variable is similar we can use this keyword here 


// Even constructor can be called using this keyword this()

public static void main(String[] args) {

    this_ THIS=new this_();
    THIS.display();

}


// In static block this keyword is not used 
// in  static block non static member and method cant be called 

}