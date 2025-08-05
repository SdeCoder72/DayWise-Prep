package Loops;

import java.util.Scanner;

public class SumOfDigits {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Number: ");
        int n = sc.nextInt();

        if(n < 0 ) n = -n; // if n is -ve

        int sum = 0;
        while(n != 0) {
            sum += n%10;
            n /=  10;
        }
        System.out.println(sum);
    }
}
