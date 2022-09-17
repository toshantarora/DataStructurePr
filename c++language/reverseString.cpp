/*
	Time Complexity: O(N)
	Space Complexity: O(1)
	
	where 'N' is the length of the string.
*/

public class Solution {
	public static String reverseString(String str) {
		
		int n = str.length();
		
		// Since strings are immutable in java, we are using a char array.
		char [] charArray = str.toCharArray();
		
		for (int i = 0; i < n / 2; ++i){
			// Swap characters.
			char ch = charArray[i];
			charArray[i] = charArray[n - i - 1];
			charArray[n - i - 1] = ch;
		}
		
		return String.valueOf(charArray);
	}

}