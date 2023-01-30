package homework;

public class hw0130_NameNotFoundException extends Exception {
	
	private String name;
	
	public hw0130_NameNotFoundException(String name) {
		super(name + " 이름을 포함하는 사용자가 존재하지 않습니다.");
		this.name = name;
	}
	
	public String getName() {
		return this.name;
	}
}
