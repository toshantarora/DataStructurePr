import java.util.*;
public class PatternFour {
    
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int row = 1;

        while(row <= n)
        {
            int col = 1;

            while(col <= n)
            {
                System.out.print(n);
                col += 1;
            }
            System.out.println();
            row += 1;
        }

    }
}
