package homework;

import java.io.Serializable;

// 직렬화에 필요한 인터페이스 사용하기
public class hw0130_User implements hw0130_IUserManager {

	private String id;
	private String password;
	private String name;
	private String email;
	private int age;
	
	public hw0130_User() {}

	public hw0130_User(String id, String password, String name, String email, int age) {
		super();
		this.id = id;
		this.password = password;
		this.name = name;
		this.email = email;
		this.age = age;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", password=" + password + ", name=" + name + ", email=" + email + ", age=" + age
				+ "]";
	}

	@Override
	public void add(hw0130_User user) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public hw0130_User[] getList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public hw0130_User[] getUsers() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public hw0130_VipUser[] getVipUsers() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public hw0130_User[] searchByName(String name) throws hw0130_NameNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public double getAgeAvg() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void saveData() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void loadData() {
		// TODO Auto-generated method stub
		
	}
	
}
