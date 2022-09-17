import java.util.*;

public class AlphaPattern {
    
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int row = 1;

        while( row <= n)
        {
            int col = 1;
            
            while( col <= row)
            {
                char alpha = (char)('A' + row - 1);
                System.out.print(alpha);
                col += 1;
            }
            System.out.println();
            row += 1;
        }
    }
}

// output : n = 4
// A
// BB
// CCC
// DDDD