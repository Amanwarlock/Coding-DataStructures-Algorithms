package Practise;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;


public class problem {

    public static void main(String[] args) {

        // X T: O(x)
        ArrayList<Dealership> dealers = new ArrayList<Dealership>();

        dealers.add(new Dealership(234, 5, 6));

    }


    // Backedn
    public static class Dealership{

            int postalCode; // postal code dealr

            int lat; // coorde

            int longitude;

        Dealership(int postalCode, int lat, int longitude){
            this.postalCode = postalCode;
            this.lat = lat;
            this.longitude = longitude;
        }
    }
}


