package de.studentnote.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Class {
	
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
	
	/*
	public String toJSONString() throws JSONException {
		
		JSONObject obj = new JSONObject();
		
		obj.put("classId", this.classId)
		   .put("name", this.name)
		   .put("level", this.level)
		   .put("belongsToSchool", this.belongsToSchool);
		
		return obj.toString();
	}*/
}
