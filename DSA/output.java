public class output
 {
    public static void main(String[] args) //this is main function 
    {
    System.out.println(Test(30,30)); //Test function  is calling and printing output 
    }

  public static int  Test(int a ,int b)  //Test function 
  {
    if(b<5)  //given condition when b is less than 5 return b*2
    return b*2;
    else        // otherwise it call itself with argument a/2 and b/2 
     return Test(a/2,b/2);
  }


}
