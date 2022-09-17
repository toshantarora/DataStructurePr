public class TowerOfHanoi {

    public static void towerofhanoi(int disks, char source, char auxiliary, char destination)
    {
        if(disks == 1)
        {
            System.out.println("move 1st disk from "+source+" to "+destination);
            return;
        }

        towerofhanoi(disks - 1,source,  destination, auxiliary );
        System.out.println("move "  + disks + "from "+source+" to "+destination);
        towerofhanoi(disks - 1, auxiliary, source ,destination);


    }
    public static void main(String args[])
    {

        towerofhanoi(3,'s','h','d');
    }
    
}
