public class case_conversion {

    public static void main(String[] args) {
        
        String str="Ajay 456546 kumar verma ";
    
        char ch[]=str.toCharArray();
        
        char c_ch[]= new char[ch.length];
        

    for(int i=0;i<ch.length;i++){
          Boolean flag=true;

        if('A'<=ch[i] && ch[i]<='Z'){
          c_ch[i]=(char)((int)ch[i]+(int)('a'-'A') );
        //  continue;
          flag=false;
        }
 
        if('a'<=ch[i] && ch[i]<='z'){
            c_ch[i]=(char)((int)ch[i]-(int)('a'-'A'));
            // continue;
            flag=false;
        }
             
        if(flag)
        c_ch[i]=ch[i];
       
        


    }

    System.out.println(new String(c_ch));

//   System.out.println('Z'-'z');



    }


}
