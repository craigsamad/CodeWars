package firstNonConsecutive;

public class FirstNonConsecutive {

	static Integer find(final int[] array) {
		Integer nonConsecutive = 0;
		for (int i = 0; i < array.length-1; i++) {
			if (array[i] + 1 != array[i+1]) {
				nonConsecutive = array[i+1];
				break;
			}
			nonConsecutive = null;
		}
        return nonConsecutive;
    }
}
