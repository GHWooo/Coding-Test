package homework;

import java.util.Arrays;

// IUserManager 의 실제 구현, IUserManager 에 정의된 메소드들을 모두 구현 해야한다.
public class hw0125_UserManagerImpl implements hw0125_IUserManager {

	private hw0125_User[] userList = new hw0125_User[100];

	private final int MAX_SIZE = 100;

	private int size = 0;
	
	// 싱글톤 패턴을 위한 객체 생성, 알맞은 접근 제어자 설정
	private static hw0125_UserManagerImpl um = new hw0125_UserManagerImpl();
	
	// 싱글톤 패턴의 기본 생성자, 객체 생성을 외부에서 하지 못하게 막음
	private hw0125_UserManagerImpl() {};
	
	// 외부에서 사용할 수 있도록 UserManagerImpl 인스턴스 반환
	public static hw0125_UserManagerImpl getInstance() {
		return um;
	}

	public void add(hw0125_User user) {
		if (size < MAX_SIZE) {
			userList[size++] = user;
		} else {
			System.out.println("유저의 수가 100을 넘었습니다. 등록 불가.");
		}
	}

	public hw0125_User[] getList() {

		return Arrays.copyOfRange(userList, 0, size);
	}

	public hw0125_User[] getUsers() {

		int cnt = 0;

		for (int i = 0; i < this.size; i++) {
			if (!(userList[i] instanceof hw0125_VipUser)) {
				cnt++;
			}
		}

		if (cnt == 0)
			return null;

		hw0125_User[] res = new hw0125_User[cnt];

		for (int i = 0, index = 0; i < this.size; i++) {
			if (!(userList[i] instanceof hw0125_VipUser)) {
				res[index++] = userList[i];
			}
		}

		return res;

	}

	public hw0125_VipUser[] getVipUsers() {

		int cnt = 0;

		for (int i = 0; i < this.size; i++) {
			if (userList[i] instanceof hw0125_VipUser) {
				cnt++;
			}
		}

		if (cnt == 0)
			return null;

		hw0125_VipUser[] res = new hw0125_VipUser[cnt];

		for (int i = 0, index = 0; i < this.size; i++) {
			if (userList[i] instanceof hw0125_VipUser) {
				res[index++] = (hw0125_VipUser) userList[i];
			}
		}

		return res;

	}

	public hw0125_User[] searchByName(String name) {

		int cnt = 0;

		for (int i = 0; i < this.size; i++) {
			if (userList[i].getName().contains(name)) {
				cnt++;
			}
		}

		if (cnt == 0)
			return null;

		hw0125_User[] res = new hw0125_User[cnt];

		for (int i = 0, index = 0; i < this.size; i++) {
			if (userList[i].getName().contains(name)) {
				res[index++] = userList[i];
			}
		}

		return res;
	}

	public double getAgeAvg() {

		int sum = 0;

		for (int i = 0; i < this.size; i++) {
			sum += userList[i].getAge();
		}

		return sum / this.size;

	}

}
