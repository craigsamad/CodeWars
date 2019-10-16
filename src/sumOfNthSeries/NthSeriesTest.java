package sumOfNthSeries;

import static org.junit.Assert.*;

import java.util.*;

import org.junit.Test;


public class NthSeriesTest {

	
	@Test
	public void arg_1_test() {
		assertEquals("1.00", NthSeries.seriesSum(1));
	}
	@Test
	public void arg_2_test() {
		assertEquals("1.25", NthSeries.seriesSum(2));
	}
	@Test
	public void arg_3_test() {
		assertEquals("1.39", NthSeries.seriesSum(3));
	}
	@Test
	public void test1() {
		assertEquals("1.57", NthSeries.seriesSum(5));
	}
	@Test
	public void test2() {
		assertEquals("1.77", NthSeries.seriesSum(9));
	}
	@Test
	public void test3() {
		assertEquals("1.94", NthSeries.seriesSum(15));
	}
}
