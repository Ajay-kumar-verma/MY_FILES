import java.util.Scanner;

// This is main class
public class swapcase
{
    //i declared Scanner class as static so that it can be accessed without making its objects 
  static    Scanner  sc= new Scanner(System.in);
    //main method execution starts from here 
	public static void main(String[] args) {

   System.out.println("Enter string :");
   String str=sc.nextLine();// This is for taking whole line as a input string 
   

   char[]  new_ary=new char[str.length()];// declaring char array , uts size is length of input string 
   
   int gap='a'-'A'; //this you can put as 32 .. this is deiierence between small case and capital case 
  
  
//   traversing each chararcter 
   for(int i=0;i<str.length();i++){
       
        char chr=str.charAt(i); // getting character at ith position 
       
       if(chr >= 'a' && chr<='z'){ // if char is smalll case than 
         new_ary[i]= (char)(chr-gap); // it gets converted into capital letter 
       }
       else if (chr>='A' && chr<='Z'){ // if cha is capital than 
             new_ary[i]= (char)(chr+gap); // it gets converted into smaller case 
       }
       else{//if not match above 2 case it keep as it is character 
        new_ary[i]= chr;
       } 

   } 
      // her i am convsrting all char into an String and printing as a Output string 
		System.out.println("You swapping case is :\n"+ String.valueOf(new_ary));
	}
}
