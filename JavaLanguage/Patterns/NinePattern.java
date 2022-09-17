import java.util.*;

public class NinePattern {
    public static void main(String[] args) {
		
		/* Your class should be named Solution.
	 	* Read input as specified in the question.
	 	* Print output as specified in the question.
		*/

        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();

        
        for(  int row = 1; row <= n; row++)
        {
            for( int col = row; col >= 1; col--)
            {
                System.out.print(col);
            }
            System.out.println();
        }
		
	}
}
