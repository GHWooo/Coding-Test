package homework;

/**
 * 도서리스트를 배열로 유지하며 관리하는 클래스
 */
public class hw0118_BookManager {
	private int MAX_SIZE = 100;
	private hw0118_Book[] books;
	private int size = 0;;
	
	public void add(hw0118_Book book) {
		if(this.size == this.MAX_SIZE) return;
		
		hw0118_Book[] newArray = new hw0118_Book[this.size + 1];
		
		for(int i = 0; i < this.size; i++) {
			newArray[i] = this.books[i];
		}
		
		newArray[this.size] = book;
		
		this.books = newArray;
		this.size += 1;
	}
	
	public void remove(String isbn) {
		if(this.size == 0) return;
		
		hw0118_Book[] newArray = new hw0118_Book[this.size - 1];
		
		int new_index = 0;
		
		for(int i = 0; i < this.size; i++) {
			if(this.books[i].getIsbn() != isbn) {
				newArray[new_index] = this.books[i];
				new_index += 1;
			}
		}
		
		this.books = newArray;
		this.size -= 1;
	}
	
	public hw0118_Book[] getList() {
		return this.books;
	}
	
	public hw0118_Book searchByIsbn(String isbn) {
		hw0118_Book book = null;
		for(int i = 0; i < this.size; i++) {
			if(this.books[i].getIsbn() == isbn) {
			 	book = this.books[i];
			 	break;
			}
		}
		
		return book;
	}
}