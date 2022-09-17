import java.util.*;
public class EightPattern {
    public static void main(String[] args) {
		
		/* Your class should be named Solution.
	 	* Read input as specified in the question.
	 	* Print output as specified in the question.
		*/
        
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        
        int row = 1;
        while(row <= n )
        {
            
            int col = 1;
            
            while( col <= row )
            {
                System.out.print(row);
                col += 1;
            }
            System.out.println();
            row += 1;
        }

		
	}
}

// output : n= 4
// 1
// 22
// 333
// 4444