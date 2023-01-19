package homework;

import java.util.Arrays;

public class hw0119_UserManager {

	private final int MAX_SIZE = 100;

	private int size = 0;
	
	private hw0119_User[] userList = new hw0119_User[MAX_SIZE];

	public void add(hw0119_User user) {
		if (size < MAX_SIZE) {
			userList[size++] = user;
		} else {
			System.out.println("유저의 수가 100을 넘었습니다. 등록 불가.");
		}
	}

	public hw0119_User[] getList() {

		return Arrays.copyOfRange(userList, 0, size);
	}
	
	// 일반 사용자만 반환
	public hw0119_User[] getUsers() {
		
		int cnt = 0;
		
		for(int i=0; i<this.size; i++) {
			// 리스트안의 객체가 VipUser 클래스의 인스턴스인지 검사
			if(!(userList[i] instanceof hw0119_VipUser)) {
				cnt++;
			}
		}
		
		if (cnt == 0)
			return null;

		hw0119_User[] res = new hw0119_User[cnt];
		
		for(int i=0, index = 0; i<this.size; i++) {
			// 리스트안의 객체가 VipUser 클래스의 인스턴스인지 검사
			if(!(userList[i] instanceof hw0119_VipUser)) {
				res[index++] = userList[i];
			}
		}
		
		return res;
		
	}
	
	// VipUser만 반환
	public hw0119_VipUser[] getVipUsers() {
		
		int cnt = 0;
		
		for(int i=0; i<this.size; i++) {
			// 리스트안의 객체가 VipUser 클래스의 인스턴스인지 검사
			if(userList[i] instanceof hw0119_VipUser) {
				cnt++;
			}
		}
		
		if (cnt == 0)
			return null;

		hw0119_VipUser[] res = new hw0119_VipUser[cnt];
		
		for(int i=0, index = 0; i<this.size; i++) {
			// 리스트안의 객체가 VipUser 클래스의 인스턴스인지 검사
			if(userList[i] instanceof hw0119_VipUser) {
				res[index++] = (hw0119_VipUser)userList[i];
			}
		}
		
		return res;
		
	}
	
	public hw0119_User[] searchByName(String name) {

		int cnt = 0;

		for (int i = 0; i < this.size; i++) {
			// 주어진 이름을 포함하는 사용자인지 검사
			if (userList[i].getName().contains(name)) {
				cnt++;
			}
		}

		if (cnt == 0)
			return null;

		hw0119_User[] res = new hw0119_User[cnt];

		for (int i = 0, index = 0; i < this.size; i++) {
			// 주어진 이름을 포함하는 사용자인지 검사
			if (userList[i].getName().contains(name)) {
				res[index++] = userList[i];
			}
		}

		return res;
	}
	
	// 사용자의 평균 나이 반환
	public double getAgeAvg() {
		
		int sum = 0;
		
		for(int i=0; i<this.size; i++) {
			sum += userList[i].getAge();
		}
		
		return sum/this.size;
		
	}

}
