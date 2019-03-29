import java.lang.ArithmeticException;

public class Student {
    public String name = "";

    public int studentID = 0;

    public double GPA = 1.0;

    public Student(String name, int studentID, double GPA) {
        this.name = name;
        this.studentID = studentID;
        this.GPA = GPA;
    }

    public double calculateGPA(double numberOfCredits, double rawPoints) throws ArithmeticException {
        if (rawPoints == 0.0) {
            throw new ArithmeticException("Error: divide by zero!");
        }

        return numberOfCredits / rawPoints;
    }

    public boolean isStudentFailing() {
        if (GPA <= 2.0) {
            return true;
        }
        else {
            return false;
        }
    }

    public void sendStudentAnEmail() {
        //Code for sending an email
    }

}
