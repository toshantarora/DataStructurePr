import java.util.*;

public class IsoscelesTriangle {
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int i = 1;

        while(i <= n)
        {
            int space = 1;

            while(space <= n - i)
            {
                System.out.print(' ');
                space += 1;
            }

            int num = 1;

            while( num <= i)
            {
                System.out.print(num);
                num += 1;
            }

            int dec = i - 1;
            
            while( dec >= 1)
            {
                System.out.print(dec);
                dec -= 1;
            }
            System.out.println();
            i += 1;
        }
    }
}
