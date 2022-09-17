import java.util.*;

public class CharacterPattern {

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
                char alpha = (char)('A' + p - 1);
                System.out.print(alpha + " ");
                col += 1;
                p += 1;
            }
            System.out.println();
            row += 1;
        }

    }
    
}
