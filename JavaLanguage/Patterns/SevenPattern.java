import java.util.Scanner;

public class SevenPattern {
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int row = 1;

        while(row <= n)
        {
            int col = 1;
            int p = row;
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

// output : n = 4
// 1 
// 2 3 
// 3 4 5 
// 4 5 6 7 