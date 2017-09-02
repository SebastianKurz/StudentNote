package de.sklw.studentnote.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.json.simple.JSONAware;
import org.json.simple.JSONObject;

@Entity
public class School implements JSONAware{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long schoolId;
	
	private String name;

	
	public long getSchoolId() {
		return schoolId;
	}
	
	public String getName() {
		return name;
	}

	public School setName(String name) {
		this.name = name;
		return this;
	}

	@SuppressWarnings("unchecked")
	@Override
	public String toJSONString() {
		JSONObject obj = new JSONObject();
		
		obj.put("schoolId", this.schoolId);
		obj.put("name", this.name);
		
		return obj.toString();
	}
	
	
}
