package algorithms;

import org.junit.Test;
import static org.junit.Assert.*;

public class InsertionSortTest {

    @Test
    public void testInsertionSortTableauNormal() {
        int[] tableau = {5, 2, 8, 1, 9, 3};
        int[] attendu = {1, 2, 3, 5, 8, 9};
        InsertionSort.insertionSort(tableau);
        assertArrayEquals(attendu, tableau);
    }

    @Test
    public void testInsertionSortTableauDejaTrie() {
        int[] tableau = {1, 2, 3, 4, 5};
        int[] attendu = {1, 2, 3, 4, 5};
        InsertionSort.insertionSort(tableau);
        assertArrayEquals(attendu, tableau);
    }

    @Test
    public void testInsertionSortTableauVide() {
        int[] tableau = {};
        int[] attendu = {};
        InsertionSort.insertionSort(tableau);
        assertArrayEquals(attendu, tableau);
    }

    @Test
    public void testInsertionSortTableauUnElement() {
        int[] tableau = {42};
        int[] attendu = {42};
        InsertionSort.insertionSort(tableau);
        assertArrayEquals(attendu, tableau);
    }

    @Test
    public void testInsertionSortAvecNegatifs() {
        int[] tableau = {-5, 3, -1, 0, 8, -3};
        int[] attendu = {-5, -3, -1, 0, 3, 8};
        InsertionSort.insertionSort(tableau);
        assertArrayEquals(attendu, tableau);
    }
}