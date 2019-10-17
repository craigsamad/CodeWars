package wrongEndHead;

public class WrongEndHead {
	public static String[] fixTheMeerkat(String[] arr) {
	    String[] output = new String[arr.length];
	    output[0] = arr[2];
	    output[1] = arr[1];
	    output[2] = arr[0];
	    return output;
	  }
}
