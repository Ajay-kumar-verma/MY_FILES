
public class string_const_pool {

    public static void main(String[] args) {
        
 // string const pool and String literal pool 
//  It is an Area in heap memory where java stores String literal values 

// Method Area 
//heap area 
//Stack Area
// Pc register
//native method area 


// When one  create objects ,  it store in heap memory
// But when we create String Literal it also  store into {scp String constant Pool }
// Because it is literal  // in this case 2 object gets created 


// When we create String literal it store into an scp( String const pool )

//  creating String literal using doubl;e quotes is fater than using string class 

// Using garbage collector only poiting data can be deleted  


// In string constant pool Area 
//only unique string store // cant repeat same string twice 




// When one create object using new String it will refer to heap store address only 

// whe one creat estring using string literal it refer to  Area of string constatt pool only 

String str="Ajay"; // These both refer to same address 
String str1="Ajay"; //

System.out.println(str+" "+str1);



    }

}
