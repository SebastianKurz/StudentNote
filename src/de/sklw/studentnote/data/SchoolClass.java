package de.sklw.studentnote.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.json.simple.JSONAware;
import org.json.simple.JSONObject;


@Entity
public class SchoolClass implements JSONAware{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long classId;
	
	private String name;
	private String level;
	private long belongsToSchool;
	

	
	public long getClassId() {
		return classId;
	}

	public long getSchool() {
		return belongsToSchool;
	}

	public SchoolClass setSchool(long school) {
		this.belongsToSchool = school;
		return this;
	}

	public String getName() {
		return name;
	}

	public SchoolClass setName(String name) {
		this.name = name;
		return this;
	}

	public String getLevel() {
		return level;
	}

	public SchoolClass setLevel(String level) {
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
