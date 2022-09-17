import java.util.*;

public class CheckPalindrome {

    public static boolean isPalindrome(String str, int start, int end)
    {
        // base case 
        if(start >= end)
        {
            return true;
        }

        if(str.charAt(start) != str.charAt(end))
        {
           return false;
        }
        return isPalindrome(str, start+1, end-1);
    }
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        String str = sc.nextLine();

        System.out.println(isPalindrome(str, 0,  str.length() - 1));
    }
    
}
