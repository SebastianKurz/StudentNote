package de.sklw.studentnote.data;

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
	private Long studentId;
	
	private String firstName;
	private String lastName;
	private long belongsToClass;
	
	
	public long getStudentId() {
		return studentId;
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
		
		obj.put("id", this.studentId);
		obj.put("firstname", this.firstName);
		obj.put("lastname", this.lastName);
		obj.put("belongsToClass", this.belongsToClass);
		
		return obj.toString();
	}
	
}
