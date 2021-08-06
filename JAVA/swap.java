public class swap {
 
    
public static void main(String []args){
int a= 3; // initially a= 3
int b= 7;// initially b=7

//1 st method 
// using temp variable 

// int temp =a;
// a=b;
// b=temp;

System.out.println("a="+a+" , b="+b);

//2nd method

a=a+b;
b=a-b;
a=a-b;

System.out.println("a="+a+" , b="+b);
}
}
