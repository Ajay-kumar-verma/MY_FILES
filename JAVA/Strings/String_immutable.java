public class String_immutable {
 
    public static void main(String[] args) {
        
// String object are  an immutable 
// if one concat string than it refer to new string 
String s= new String("Ajay");
// In this case Ajay will store heap memory and slp 
  
String sc=s.concat(" Kumar ");
// In this case Ajay kumar will store heap memory and kumar onl;y store in slp 

System.out.println(sc);


// String object are immutable one cant change once string literals declra 



// Why String object are immutable 
// For running java program faster it all same string store in scp 
// and it does not duplicate it 
//if it would be changable 
// if one string literal are changed it reflect to all 
// String 




// String is god in java


    }

}
