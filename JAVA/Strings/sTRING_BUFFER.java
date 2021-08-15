public class sTRING_BUFFER {

    public static void main(String[] args) {
// String buffer is mutable String 
// Whereas  String is a immutable 


StringBuffer sb= new StringBuffer("Ajay kumar verma");
System.out.println(sb);

//  constructor 
// StringBuffer (){}
//StringBuffer(charSequence seq){}
// StringBuffer(String str){}
// StringBuffer(int capacity){}

// All method are senchronous in that 

System.out.println(sb.capacity()); //16+character length
System.out.println(sb.length()); //length of character 


// Its chapacity increase by {curnt_capcity*2 +2 }
sb.delete(1, 4);

System.out.println(sb);


    }

}
