package sumConsecutives;

import java.util.LinkedList;
import java.util.List;

public class SumConsecutives {

	public static List<Integer> sumConsecutives(List<Integer> s) {
		List<Integer> returnList = new LinkedList<Integer>();
		int result = 0;
		for (int i = 0; i < s.size(); i++) {
			result = s.get(i);
			for (int j = i+1; j < s.size(); j++) {
				if (s.get(i) == s.get(j)) {
					result += s.get(j);
					i++;
				} else {
					returnList.add(result);
					break;
				}
			}
			if (i == s.size()-1) {
				returnList.add(result);
			}
		}
		return returnList;
	}
}
