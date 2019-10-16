package countingDuplicates;

import java.util.HashMap;
import java.util.Map;

public class CountingDuplicates {

	
	public static int duplicateCount(String text) { //abcdea
	    char[] wordArray = text.toCharArray();
	    Map<String, Integer> textMap = new HashMap<String, Integer>();
	    int totalDuplicates = 0;
	    
		for (char w : wordArray) {
			String strW = Character.toString(Character.toLowerCase(w));
			int duplicateCount = 0;
			if (!textMap.containsKey(strW)) {
				textMap.put(strW, duplicateCount);
			}
			else {
				duplicateCount++;
				textMap.put(strW, duplicateCount);
			}
		}
		
		for (Map.Entry<String, Integer> item : textMap.entrySet()) {
			if (item.getValue() > 0) {
				totalDuplicates++;
			}
		}
		return totalDuplicates;
	}
}
