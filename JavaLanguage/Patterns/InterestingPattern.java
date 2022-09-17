import java.util.*;
public class InterestingPattern {
	public static void main(String[] args) {
		//Your code goes here
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        
        int row = 1;
        
        while(row <= n)
        {
            int col =1;
            
             char chalpha = (char)('A' + n - row);
            while(col <= row)
            {
                System.out.print(chalpha);
                 chalpha = (char)(chalpha + 1);
                col += 1;
               
                    
            }
            System.out.println();
            row += 1;
        }
	}
}

// output : n= 5
// E
// DE
// CDE
// BCDE
// ABCDE