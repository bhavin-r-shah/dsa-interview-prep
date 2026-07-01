import java.util.Scanner;

public class Test {
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static void main() {
        System.out.println("Enter the 2 numbers to add seperated by a space:");
        Scanner scanner = new Scanner(System.in);
        String input[] = scanner.nextLine().split(" ");
        System.out.println("Sum = " + add(Integer.parseInt(input[0]), Integer.parseInt(input[1])));
        scanner.close();
    }
}
