// import java.util.*;
public class swapping {
    
public static void main(String [] args){

int a[]={2,5};

// BEFORE SORTING 
System.out.println("BEFORE SORTING .....!");
System.out.println("a = "+a[0]);
System.out.println("b = "+a[1]);

// if we pass any object (like Array clas we pass their Adress )
// And whatever changed we make on array we make on array itself

swap(a);
// Arrays.sort(a);

System.out.println("AFTER  SORTING .....!");
System.out.println("a = "+a[0]);
System.out.println("b = "+a[1]);

}

static void swap(int x[]){
int temp=x[0];
x[0]=x[1];
x[1]=temp;
}


}
