import java.util.*;

public class SixPattern {
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int row = 1;

        int p = 1;
        while(row <= n)
        {
            int col = 1;

            while(col <= row)
            {
                System.out.print(p + " ");
                col += 1;
                p += 1;
            }
            System.out.println();
            row += 1;
        }

    }
}

// output  n= 4
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10