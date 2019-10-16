package duplicateEncoder;

public class DuplicateEncoder {

	
	public static String encode(String word){
		String encodedWord = "";
		char[] wordArray = word.toCharArray();
		for (char w : wordArray) {
			int charCount = 0;
			for (int i = 0; i < wordArray.length; i++) {
				if (Character.toLowerCase(w) == Character.toLowerCase(wordArray[i])) {
					charCount++;
				}
			}
			if (charCount > 1) {
				encodedWord += ")";
			}
			else {
				encodedWord += "(";
			}
			charCount = 0;
		}
	    return encodedWord;
	}
}
