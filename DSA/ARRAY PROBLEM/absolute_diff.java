public class absolute_diff {
    
public static void main(String [] args){

int ar[]={10,5,3,9,2};
int x=7;

for(int i=0;i<ar.length;i++)
{  
  int index=0;
  int max=0; 
  for(int j=i;j<ar.length;j++)
   {  
    int  dif=Math.abs(ar[j]-x); 
    index=(dif > max)?j:index; 
    max=(dif > max)?dif:max; 
   }

  int temp=ar[i];
  ar[i]=ar[index];  
  ar[index]=temp;
}


for(int e:ar)
{
    System.out.print(e+" \t");
}


}


}
