package de.studentnote.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class School {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long schoolId;
	
	private String name;

	
	public long getSchoolId() {
		return schoolId;
	}

	public School setSchoolId(long schoolId) {
		this.schoolId = schoolId;
		return this;
	}
	
	public String getName() {
		return name;
	}

	public School setName(String name) {
		this.name = name;
		return this;
	}
	
	
}
