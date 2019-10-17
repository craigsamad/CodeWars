package findUniqueNum;

import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.runners.JUnit4;

public class FindUniqueNumTest {

	private double precision = 0.0000000000001;
    
    @Test
    public void sampleTestCases() {
        assertEquals(1.0, FindUniqueNum.findUniq(new double[]{0, 1, 0}), precision);
        assertEquals(2.0, FindUniqueNum.findUniq(new double[]{1, 1, 1, 2, 1, 1}), precision);
    }
}
