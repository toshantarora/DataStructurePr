import java.util.Scanner;
import java.lang.*;

public class GeometricSum {

    // Given k, find the geometric sum i.e.
    // 1 + 1/2 + 1/4 + 1/8 + ... + 1/(2^k) 
    // using recursion.
    // 1/2 ^ K
    // Input - 3
    // Output - 1.87500

    // Explanation for Sample Input 1:
    // 1+ 1/(2^1) + 1/(2^2) + 1/(2^3) = 1.87500

    public static double findGeometricSum(int k)
    {
        if(k == 0)
        {
            return 1;
        }


        return findGeometricSum(k - 1) + 1 / Math.pow(2, k) ;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(findGeometricSum(n));

    }
}
