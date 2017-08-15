package de.studentnote.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long studentId;
	
	private String firstName;
	private String lastName;
	private long belongsToClass;
	
	
	public long getStudentId() {
		return studentId;
	}
	
	public Student setStudentId(long studentId) {
		this.studentId = studentId;
		return this;
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public Student setFirstName(String firstName) {
		this.firstName = firstName;
		return this;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public Student setLastName(String lastName) {
		this.lastName = lastName;
		return this;
	}
	
	public long getIdOfClass() {
		return belongsToClass;
	}
	
	public Student setIdOfClass(long idOfClass) {
		belongsToClass = idOfClass;
		return this;
	}
	
}
