import java.util.Scanner;

/**
 * This program prompts the user to enter their name and then greets them with a personalized message.
 * It uses the Scanner class to read user input from the console.
 */
public class HelloUser {
    public static void main() {
        // Create a Scanner object to read user input
        Scanner scanner = new Scanner(System.in);

        System.out.println("Please enter your name:");
        String name = scanner.nextLine(); // Reads the input until user presses Enter
        System.out.println("Hello " + name + "!");

        // Close the scanner to prevent resource leaks
        scanner.close();
    }
}