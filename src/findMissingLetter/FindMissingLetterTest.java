package findMissingLetter;

import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.runners.JUnit4;

public class FindMissingLetterTest {

	
	@Test
    public void exampleTests() {
        assertEquals('e', FindMissingLetter.findMissingLetter(new char[] { 'a','b','c','d','f' }));
        
    }
	
	@Test
    public void exampleTest2() {
		assertEquals('P', FindMissingLetter.findMissingLetter(new char[] { 'O','Q','R','S' }));
        
    }
	
	
}
