package de.studentnote.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.json.simple.JSONAware;
import org.json.simple.JSONObject;


@Entity
public class Class implements JSONAware{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long classId;
	
	private String name;
	private String level;
	private long belongsToSchool;
	

	
	public long getClassId() {
		return classId;
	}
	
	public Class setClassId(long classId) {
		this.classId = classId;
		return this;
	}

	public long getSchool() {
		return belongsToSchool;
	}

	public Class setSchool(long school) {
		this.belongsToSchool = school;
		return this;
	}

	public String getName() {
		return name;
	}

	public Class setName(String name) {
		this.name = name;
		return this;
	}

	public String getLevel() {
		return level;
	}

	public Class setLevel(String level) {
		this.level = level;
		return this;
	}

	@SuppressWarnings("unchecked")
	@Override
	public String toJSONString() {
		
		JSONObject obj = new JSONObject();
		
		obj.put("classId", this.classId);
		obj.put("name", this.name);
		obj.put("level", this.level);
		obj.put("belongsToSchool", this.belongsToSchool);
		
		   
		return obj.toString();
	}
}
