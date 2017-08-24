package de.studentnote.sklw.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.json.simple.JSONAware;
import org.json.simple.JSONObject;

@Entity
public class Student implements JSONAware{
	
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

	@SuppressWarnings("unchecked")
	@Override
	public String toJSONString() {
		JSONObject obj = new JSONObject();
		
		obj.put("studentId", this.studentId);
		obj.put("firstName", this.firstName);
		obj.put("lastName", this.lastName);
		obj.put("belongsToClass", this.belongsToClass);
		
		return null;
	}
	
}
