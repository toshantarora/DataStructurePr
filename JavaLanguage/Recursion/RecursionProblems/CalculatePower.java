import java.util.*;

public class CalculatePower {
    
    public static int calculatePow(int x, int n)
    {

        if (n == 0)
        {
            return 1;
        }

        int smallOutput = calculatePow(x, n - 1);
        int output = x * smallOutput;
        return output;
    }
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        int n = sc.nextInt();

        int ans = calculatePow(x,n);
        System.out.print(ans);
    }
}
