package de.studentnote.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Teacher {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long teacherId;
	
	private String firstName;
	private String lastName;
	private String mailAddress;
	private String password;
	private long belongsToSchool;
	
	
	public long getTeacherId() {
		return teacherId;
	}
	public Teacher setTeacherId(long teacherId) {
		this.teacherId = teacherId;
		return this;
	}
	public String getFirstName() {
		return firstName;
	}
	public Teacher setFirstName(String firstName) {
		this.firstName = firstName;
		return this;
	}
	public String getLastName() {
		return lastName;
	}
	public Teacher setLastName(String lastName) {
		this.lastName = lastName;
		return this;
	}
	public String getMailAddress() {
		return mailAddress;
	}
	public Teacher setMailAddress(String mailAddress) {
		this.mailAddress = mailAddress;
		return this;
	}
	public String getPassword() {
		return password;
	}
	public Teacher setPassword(String password) {
		this.password = password;
		return this;
	}
	public long getBelongsToSchool() {
		return belongsToSchool;
	}
	public Teacher setBelongsToSchool(long belongsToSchool) {
		this.belongsToSchool = belongsToSchool;
		return this;
	}
	
}
