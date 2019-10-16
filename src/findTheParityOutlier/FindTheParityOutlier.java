package findTheParityOutlier;

public class FindTheParityOutlier {
	
	static int find(int[] integers){
		/*//check for multiple evens in first three numbers, if there are at least two, outlier is odd
		if (integers[0]%2 == 0 && (integers[1]%2 == 0 || integers[2]%2 == 0)) {
			for (int i : integers) {
				if (Math.abs(i%2) == 1) {
					return i;
				}
			}
		} 
		else { //else outlier is even, check for that
			for (int i : integers) {
				if (i%2 == 0) {
					return i;
				}
			}
		}*/
		
		//re-trying different method as inital unit tests were passing but final one wasn't
		int evenCount = 0;
		int oddCount = 0;
		int outlier;
		
		//count number of evens and odds in the array
		for (int i = 0; i < integers.length; i++) {
			if (integers[i]%2 == 0) {
				evenCount++;
			}
			else {
				oddCount++;
			}
		}
		//set outlier to either even or odd
		if (evenCount > oddCount) {
			outlier = 1; // 1 = odd
		} else {
			outlier = 0; // 0 = even
		}
		//check for even or odd outlier in array and return it
		for (int i = 0; i < integers.length; i++) {
			if (Math.abs(integers[i]%2) == outlier){
			    return integers[i];
			 }
		}
		return 0;
	}

}
