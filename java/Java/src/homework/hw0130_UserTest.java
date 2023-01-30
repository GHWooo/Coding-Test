package homework;

import java.util.Arrays;

public class hw0130_UserTest {

	public static void main(String[] args) {

		hw0130_User user1 = new hw0130_User();
		user1.setId("user1");
		user1.setPassword("user1");
		user1.setName("김싸피");
		user1.setEmail("ssafy1@ssafy.com");
		user1.setAge(27);

		hw0130_User user2 = new hw0130_User("user2", "user2", "박싸피", "ssafy2@ssafy.com", 28);
		hw0130_VipUser vuser = new hw0130_VipUser("vip1", "vip1", "김싸피", "ssafy3@ssafy.com", 29, "Gold", 300);


		hw0130_IUserManager um = hw0130_UserManagerImpl.getInstance();
		
		
		um.add(user1);
		um.add(user2);
		um.add(vuser);
		um.saveData();
		 
		
		
		um.loadData();
		
		try {
			System.out.println(Arrays.toString(um.searchByName("황")));
		} catch (hw0130_NameNotFoundException e) {
			e.printStackTrace();
		}
		System.out.println(Arrays.toString(um.getUsers()));
		System.out.println(um.getAgeAvg());


	}

}
