package homework;

public class UserTest {

	public static void main(String[] args) {
		
		// 사용자 객체의 멤버 변수 이름을 통해 직접 접근하는 대신 setter 메소드를 사용하여 값 설정
		hw0118_User user1 = new hw0118_User();
		user1.setId("user1");
		user1.setPassword("user1");
		user1.setName("김싸피");
		user1.setEmail("ssafy1@ssafy.com");
		user1.setAge(27);

		hw0118_User user2 = new hw0118_User("user2", "user2", "박싸피", "ssafy2@ssafy.com", 28);
		
		hw0118_UserManager um = new hw0118_UserManager();
		
		um.add(user1);
		um.add(user2);
		
		// toString 을 통해 등록된 사용자 리스트 출력
		for(hw0118_User user : um.getList()) {
			if(user == null) break;
			System.out.println(user);
		}
		
		// "김싸피" 라는 이름을 가진 사용자가 있으면 찾아서 출력
		System.out.println(um.searchByName("김싸피"));
		
		// 등록된 사용자 수 출력 ( size 는 private 이므로 출력 x )
		int count = 0;
		
		for(hw0118_User user : um.getList()) {
			if(user == null) break;
			count += 1;
		}
		
		System.out.println(count);
		
	}

}