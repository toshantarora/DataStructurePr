public class FibonacciSeries {
    
    public static int fibSeries(int n)
    {
        // base case 
        if(n==1||n==2){
            return 1;
        }
        int fib_n_1=fibSeries(n-1);
        int fib_n_2=fibSeries(n-2);
        int output=fib_n_1+fib_n_2;
        return output;
    }
    public static void main(String args[])
    {

        System.out.println(fibSeries(5));
    }
}
