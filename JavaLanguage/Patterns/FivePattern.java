import java.util.*;

public class FivePattern {
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int row = 1;

        while(row <= n)
        {
            int col = 1;

            while(col <= row)
            {
                System.out.print(col);
                col += 1;
            }
            System.out.println();
            row += 1;
        }

    }
}

// output : n = 4
// 1
// 12
// 123
// 1234
