package sumOfNthSeries;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class NthSeries {
	
	public static String seriesSum(int n) {
		String series = "";
		double totalNum = 0;
		if (n == 0) {
			series = "0.00";
			return series;
		}
		if (n == 1) {
			series = "1.00";
			return series;
		}
		for (int i = 1; i < n; i++) {
			double num;
			num = (double)1/(i*3+1);
			totalNum += num;
		}
		totalNum = 1 + totalNum;
		BigDecimal roundedTotalNum = new BigDecimal(Double.toString(totalNum));
		roundedTotalNum = roundedTotalNum.setScale(2, RoundingMode.HALF_UP);
		series = roundedTotalNum.toString();
		return series;
	}
}
