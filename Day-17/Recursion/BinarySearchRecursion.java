package Recursion;

import java.util.Scanner;

public class BinarySearchRecursion {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the length of arr: " );
        int n = sc.nextInt();
        System.out.print("Enter the elements of arr: ");
        int[] arr = new int[n];
        for(int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        System.out.print("Enter the element you want to find in arr: ");
        int ele = sc.nextInt();

        System.out.println(findElement(arr, ele, 0, n-1));
    }
    public static boolean findElement(int[] arr, int ele, int low, int high) {
        if(low > high) return false;

        int mid = low + (high - low)/2;

        if(arr[mid] == ele) return true;
        else if(arr[mid] > ele) return findElement(arr, ele, low, mid-1);
        else return findElement(arr, ele, mid+1, high);
    }

}
