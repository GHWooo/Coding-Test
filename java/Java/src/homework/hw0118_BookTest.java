package homework;

public class hw0118_BookTest {

	public static void main(String[] args) {
		hw0118_BookManager bookManager = new hw0118_BookManager();
		bookManager.add(new hw0118_Book("21424", "Java Pro", "김하나", "jaen.kr", 15000, "Java 기본 문법"));
		bookManager.add(new hw0118_Book("21425", "Java Pro2", "김하나", "jaen.kr", 25000, "Java 응용"));
		bookManager.add(new hw0118_Book("35355", "분석설계", "소나무", "jaen.kr", 30000, "SW 모델링"));
		
		System.out.println("**********************도서목록**********************");
		for(hw0118_Book book : bookManager.getList()) {
			System.out.println(book);
		}
		
		System.out.println("**********************도서조회:21424**********************");
		System.out.println(bookManager.searchByIsbn("21424"));
		
		System.out.println("**********************도서삭제:21424**********************");
		bookManager.remove("21424");
		
		System.out.println("**********************도서목록**********************");
		for(hw0118_Book book : bookManager.getList()) {
			System.out.println(book);
		}
	}
}
