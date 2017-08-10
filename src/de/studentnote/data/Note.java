package de.studentnote.data;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Note {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long noteId;
	
	private String text;
	private Timestamp timestamp;
	private String authorTeacherId;
	private String belongsToStudent;
	
	
	public long getNoteId() {
		return noteId;
	}
	public void setNoteId(long noteId) {
		this.noteId = noteId;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public Timestamp getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(Timestamp timestamp) {
		this.timestamp = timestamp;
	}
	public String getAuthorTeacherId() {
		return authorTeacherId;
	}
	public void setAuthorTeacherId(String authorTeacherId) {
		this.authorTeacherId = authorTeacherId;
	}
	public String getBelongsToStudent() {
		return belongsToStudent;
	}
	public void setBelongsToStudent(String belongsToStudent) {
		this.belongsToStudent = belongsToStudent;
	}
	
}
