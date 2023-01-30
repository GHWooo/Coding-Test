package homework;

public interface hw0130_IUserManager {
	
	void add(hw0130_User user);

	hw0130_User[] getList();

	hw0130_User[] getUsers();

	hw0130_VipUser[] getVipUsers();

	hw0130_User[] searchByName(String name) throws hw0130_NameNotFoundException;
	
	double getAgeAvg();
	
	// 데이터 저장 기능 추가
	void saveData();
	
	// 데이터 로드 기능 추가
	void loadData();
}
