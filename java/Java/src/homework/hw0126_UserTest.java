package homework;

import java.util.Arrays;

public class hw0126_UserTest {

	public static void main(String[] args) {
		hw0126_User user1 = new hw0126_User();
		user1.setId("user1");
		user1.setPassword("user1");
		user1.setName("김싸피");
		user1.setEmail("ssafy1@ssafy.com");
		user1.setAge(27);

		hw0126_User user2 = new hw0126_User("user2", "user2", "박싸피", "ssafy2@ssafy.com", 28);
		hw0126_VipUser vuser = new hw0126_VipUser("vip1", "vip1", "김싸피", "ssafy3@ssafy.com", 29, "Gold", 300);

		hw0126_IUserManager um = hw0126_UserManagerImpl.getInstance();
		hw0126_IUserManager um2 = hw0126_UserManagerImpl.getInstance();

		um.add(user1);
		um.add(user2);
		um.add(vuser);

		// ArrayList로 자료 구조를 바꾼 뒤 똑같이 동작하는지 테스트한다.
		System.out.println(Arrays.toString(um.searchByName("황")));

		System.out.println(Arrays.toString(um.getUsers()));
		System.out.println(um.getAgeAvg());

		System.out.println(um.equals(um2));

	}

}
