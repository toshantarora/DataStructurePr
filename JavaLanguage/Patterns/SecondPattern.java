import java.util.*;

public class SecondPattern {
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
                // System.out.print(row);
                System.out.print(col);
                col += 1;
            }
            System.out.println();
            row += 1;
        }


    }
}

// if S.o.p = row
// 1111
// 2222
// 3333
// 4444

// if S.o.p = col
// 1234
// 1234
// 1234
// 1234