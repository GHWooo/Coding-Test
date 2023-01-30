package homework;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

public class hw0130_UserManagerImpl implements hw0130_IUserManager {

	private List<hw0130_User> userList = new ArrayList<>();

	private final int MAX_SIZE = 100;

	private static hw0130_UserManagerImpl um = new hw0130_UserManagerImpl();

	private hw0130_UserManagerImpl() {
	};

	public static hw0130_UserManagerImpl getInstance() {
		return um;
	}

	public void add(hw0130_User user) {
		if (userList.size() < MAX_SIZE) {
			userList.add(user);
		} else {
			System.out.println("유저의 수가 100을 넘었습니다. 등록 불가.");
		}
	}

	public hw0130_User[] getList() {

		hw0130_User[] res = new hw0130_User[userList.size()];

		return this.userList.toArray(res);
	}

	public hw0130_User[] getUsers() {

		List<hw0130_User> list = new ArrayList<>();

		for (int i = 0; i < userList.size(); i++) {
			if (!(userList.get(i) instanceof hw0130_VipUser)) {
				list.add(userList.get(i));
			}
		}

		hw0130_User[] res = new hw0130_User[list.size()];

		return list.toArray(res);

	}

	public hw0130_VipUser[] getVipUsers() {

		List<hw0130_VipUser> list = new ArrayList<>();

		for (int i = 0; i < userList.size(); i++) {
			if (!(userList.get(i) instanceof hw0130_VipUser)) {
				list.add((hw0130_VipUser) userList.get(i));
			}
		}

		hw0130_VipUser[] res = new hw0130_VipUser[list.size()];

		return list.toArray(res);

	}

	public hw0130_User[] searchByName(String name) throws hw0130_NameNotFoundException {

		List<hw0130_User> list = new ArrayList<>();

		for (int i = 0; i < userList.size(); i++) {
			if (userList.get(i).getName().contains(name)) {
				list.add(userList.get(i));
			}
		}

		if (list.size() == 0)
			throw new hw0130_NameNotFoundException(name);

		hw0130_User[] res = new hw0130_User[list.size()];

		return list.toArray(res);
	}

	public double getAgeAvg() {

		int sum = 0;

		for (int i = 0; i < userList.size(); i++) {
			sum += userList.get(i).getAge();
		}

		return sum / userList.size();

	}
	
	// 사용자 정보 저장
	public void saveData() {
		// try with resources
		try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("user.dat"))) {
			oos.writeObject(this.userList);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	// 사용자 정보 로드
	public void loadData() {
		File file = new File("user.dat");
		
		// 파일이 없을 경우 고려
		if(file.exists()) {
			// try with resources
			try(ObjectInputStream ois = new ObjectInputStream(new FileInputStream(file))){
				this.userList = (List<hw0130_User>)ois.readObject();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

}
