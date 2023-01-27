package homework;

public interface hw0126_IUserManager {
	
	void add(hw0126_User user);

	hw0126_User[] getList();

	hw0126_User[] getUsers();

	hw0126_VipUser[] getVipUsers();

	hw0126_User[] searchByName(String name);
	
	double getAgeAvg();
	
}
