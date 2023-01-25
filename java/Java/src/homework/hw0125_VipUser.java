package homework;

public class hw0125_VipUser extends hw0125_User {

	private String grade;
	private int point;

	public hw0125_VipUser() {
		super();
	}

	public hw0125_VipUser(String id, String password, String name, String email, int age, String grade, int point) {
		super(id, password, name, email, age);
		this.grade = grade;
		this.point = point;

	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public int getPoint() {
		return point;
	}

	public void setPoint(int point) {
		this.point = point;
	}

	@Override
	public String toString() {
		return "VipUser [id=" + this.getId() + ", password=" + this.getPassword() + ", name=" + this.getName()
				+ ", email=" + this.getEmail() + ", age=" + this.getAge() + ", grade=" + grade + ", point=" + point
				+ "]";
	}

}
