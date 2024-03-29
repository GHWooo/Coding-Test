package homework;

import java.util.Arrays;

public class hw0125_UserTest {

	public static void main(String[] args) {
		hw0125_User user1 = new hw0125_User();
		user1.setId("user1");
		user1.setPassword("user1");
		user1.setName("김싸피");
		user1.setEmail("ssafy1@ssafy.com");
		user1.setAge(27);

		hw0125_User user2 = new hw0125_User("user2", "user2", "박싸피", "ssafy2@ssafy.com", 28);
		hw0125_VipUser vuser = new hw0125_VipUser("vip1", "vip1", "김싸피" , "ssafy3@ssafy.com", 29, "Gold", 300);
		
		// 싱글톤 테스트를 위해 UserManager 2개 생성
		hw0125_UserManagerImpl um = hw0125_UserManagerImpl.getInstance();
		hw0125_UserManagerImpl um2 = hw0125_UserManagerImpl.getInstance();
		
		um.add(user1);
		um.add(user2);
		um.add(vuser);
		
		// 동일하게 동작하는지 테스트
		System.out.println(Arrays.toString(um.searchByName("김")));
		System.out.println(Arrays.toString(um.getUsers()));
		System.out.println(um.getAgeAvg());
		
		// UserManager 2개가 같은 인스턴스를 참조하는지 검사
		System.out.println(um.equals(um2));
		
	}

}
