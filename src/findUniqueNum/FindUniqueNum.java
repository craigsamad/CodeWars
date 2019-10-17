package findUniqueNum;

import java.util.Arrays;

public class FindUniqueNum {

	public static double findUniq(double arr[]) {
		/*double unique = 0;
		if (arr[0] != arr[1]) {
			if (arr[0] == arr[2]) {
				unique = arr[1];
				return unique;
			}
			else {
				unique = arr[1];
				return unique;
			}
		}
		for (double n : arr) {
			for (int i = 1; i < arr.length; i++) {
				if (!(n == arr[i])) {
					unique = arr[i];
					break;
				}
				else {
					continue;
				}
			}
		}
	    return unique;*/
		
		Arrays.sort(arr);
	      if (arr[0] == arr[1]) {
	        return arr[arr.length-1];
	      }
	      return arr[0];
	}
}
