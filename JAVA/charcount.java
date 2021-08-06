public class charcount {

    public static void main(String[] args) {
        

  char []count;
  count=new char[26];

  for (int i = 0; i < count.length; i++) {
      count[i]=0;
  }

String str="AAAAAAAA";
int maxcount=0;
int mincount=0;
for (int i=0;i<str.length();i++) {
  
    int val= str.charAt(i)-'A';
    count[val]=count[val]++;
     if(maxcount<count[val]){
         maxcount=count[val];
     }
  if(mincount>count[val]){
      mincount=count[val];
  }



}


System.out.println(mincount+":"+maxcount);

    }

}
