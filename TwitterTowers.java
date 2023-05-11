
package twittertowers;


import static java.lang.System.exit;
import java.util.Scanner;
import java.math.*;

public class TwitterTowers {
        static Scanner in= new Scanner(System.in);

    public static double rectangle(){
          System.out.println("please enter height");
        double height;
        do{
            height=  in.nextDouble();
        }
      while(height<2);
         System.out.println("please enter width");
        double width= in.nextDouble();
     if(height-width>5||width-height>5){
            System.out.println("The area of the rectangle is: ");
          return width*height;}
      else {
            System.out.println("The perimeter of the rectangle is: ");
          return (width+height)*2;
      }     
         
}
    
    public static void triangular(){
       System.out.println("please enter height");
        double height;
        do{
            height=  in.nextDouble();
        }
      while(height<2);
         System.out.println("please enter width");
        double width= in.nextDouble();
    //=======1========
    double len;
       len=Math.pow(height,2)+Math.pow((width/2),2);
       len=Math.sqrt(len);
        System.out.println("the permiter of the triangularis: "+(len*2+width));
    
    //============2============
    
    if(width%2==0 || width>height*2)
            System.out.println("we can't print this triangular");
    else if (width%2!=0 && width<2*height) {
     int CntOdd, CntLoop;  
     CntOdd=(int) ((width-2)/2);
     CntLoop=(int) ((height-2)/CntOdd);
       int i;
        printSpaces((int) ((width ) / 2));  
        System.out.println("*");
     for(i=3;i<width;i+=2){
         if(i==3){
             if(CntLoop%2==1)
                 CntLoop+=(CntLoop/2);
         }
         for(int k=1;k<=CntLoop;k++){  
               printSpaces((int) ((width-i ) / 2));       
         for(int j=1;j<=i;j++){
             System.out.print("*");
         }
         System.out.println(" ");

         }
           if(i==3)
             CntLoop-=(CntLoop/2);
     }       
     
        while(i>0){
            System.out.print("*");
            i--;
        }
        System.out.println(" ");   
    }
}

     public static void printSpaces(int count) {
        for (int i = 0; i < count; i++) {
            System.out.print(" ");
        }
    }

    
    
    public static void main(String[] args) {
        int num;
        do{
     System.out.println("Please choose 1 for rectangle, 2 for triangular and 3 for exit :");
      num = in.nextInt();
         switch (num){     
             case 1:
                 System.out.println(rectangle());
                 break;           
             case 2:
                 triangular();
                 break;
             case 3:
                 System.out.println("GoodBye");
                 exit(0);
             default:
                 System.out.println("Eror");   
         }
          }
        while(num!=3);
        }
 
    }
    

