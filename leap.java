
public class Leap {


    public static void main(String[] args) 
    {
        // Test de la fonction isLeapYear
        System.out.println(isLeapYear("2000")); // true
        System.out.println(isLeapYear("1900")); // false
        System.out.println(isLeapYear("2020")); // true
        System.out.println(isLeapYear("2021")); // false
        System.out.println(isLeapYear("bob")); // false
    }

    // Cette fonction retourne true si l'année est bissextile, false sinon
    // Une année est bissextile si elle est divisible par 4, mais pas par 100, sauf si elle est divisible par 400
    // Par exemple, 2000 est bissextile, mais 1900 ne l'est pas
    public static boolean isLeapYear(String year) 
    {
        // todo: implement this method
    }
}

