// import java.util.*;

public class TriangleOfNumber {
    
    public static void main(String[] args)
    {
        int i = 1;
        while(i < 3) {
            int j = 0;
            while(j < 5) {
                j++;
                if(j == 3) {
                    continue;
                }
                System.out.print(j + " ");
            }
            i++;
        }
        // Scanner sc = new Scanner(System.in);
        // int n = sc.nextInt();

        
        // int i = 1;  // initialize a row 1
        // while(i <= n) // outerloop 1 to N
        // {
        //     int space = 1;
        //     while(space <=  n - i)
        //     {
        //         System.out.print(" "); // Print space
        //         space += 1;
        //     }

        //     int numIncrement = 1;
        //     int p = i;
        //     while(numIncrement <= i)
        //     {
        //         System.out.print(p);
        //         p += 1;
        //         numIncrement += 1;
               
        //     }

        //     int decNum = (2 * i) - 2;

        //     while(decNum >= i)
        //     {
        //         System.out.print(decNum);
        //         decNum -= 1;
        //     }
        //     System.out.println();
        //     i += 1;
        // }
    }
}
