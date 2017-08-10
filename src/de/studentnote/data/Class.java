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
	
	public void setClassId(long classId) {
		this.classId = classId;
	}

	public long getSchool() {
		return belongsToSchool;
	}

	public void setSchool(long school) {
		this.belongsToSchool = school;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}
}
