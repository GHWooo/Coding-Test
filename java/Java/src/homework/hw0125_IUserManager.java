package homework;

//인터페이스 정의
public interface hw0125_IUserManager {
	
	void add(hw0125_User user);

	hw0125_User[] getList();

	hw0125_User[] getUsers();

	hw0125_VipUser[] getVipUsers();

	hw0125_User[] searchByName(String name);
	
	double getAgeAvg();
	
}
