package homework;

import java.util.ArrayList;
import java.util.List;

public class hw0126_UserManagerImpl implements hw0126_IUserManager {
	
	// ArrayList 를 사용하여 사용자 리스트 관리하기
	private List<hw0126_User> userList = new ArrayList<>();

	private final int MAX_SIZE = 100;

	private static hw0126_UserManagerImpl um = new hw0126_UserManagerImpl();

	private hw0126_UserManagerImpl() {
	};

	public static hw0126_UserManagerImpl getInstance() {
		return um;
	}
	
	// ArrayList의 사용 방법에 맞게 구현
	public void add(hw0126_User user) {
		if (userList.size() < MAX_SIZE) {
			userList.add(user);
		} else {
			System.out.println("유저의 수가 100을 넘었습니다. 등록 불가.");
		}
	}
	
	// ArrayList를 배열로 변환하여 반환
	public hw0126_User[] getList() {

		hw0126_User[] res = new hw0126_User[userList.size()];

		return this.userList.toArray(res);
	}
	
	// ArrayList의 사용 방법에 맞게 구현
	public hw0126_User[] getUsers() {

		List<hw0126_User> list = new ArrayList<>();

		for (int i = 0; i < userList.size(); i++) {
			if (!(userList.get(i) instanceof hw0126_VipUser)) {
				list.add(userList.get(i));
			}
		}

		hw0126_User[] res = new hw0126_User[list.size()];

		return list.toArray(res);

	}	

	// ArrayList의 사용 방법에 맞게 구현
	public hw0126_VipUser[] getVipUsers() {

		List<hw0126_User> list = new ArrayList<>();

		for (int i = 0; i < userList.size(); i++) {
			if (!(userList.get(i) instanceof hw0126_VipUser)) {
				list.add((hw0126_VipUser) userList.get(i));
			}
		}

		hw0126_VipUser[] res = new hw0126_VipUser[list.size()];

		return list.toArray(res);

	}
	
	// ArrayList의 사용 방법에 맞게 구현
	public hw0126_User[] searchByName(String name) {

		List<hw0126_User> list = new ArrayList<>();

		for (int i = 0; i < userList.size(); i++) {
			if (userList.get(i).getName().contains(name)) {
				list.add(userList.get(i));
			}
		}
		
		// 주어진 단어를 포함하는 사용자가 없으면 null을 반환한다.
		if(list.size() == 0)
			return null;

		hw0126_User[] res = new hw0126_User[list.size()];

		return list.toArray(res);
	}
	
	// ArrayList의 사용 방법에 맞게 구현
	public double getAgeAvg() {

		int sum = 0;

		for (int i = 0; i < userList.size(); i++) {
			sum += userList.get(i).getAge();
		}

		return sum / userList.size();

	}

}
