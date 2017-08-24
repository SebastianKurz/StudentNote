package de.studentnote.sklw.data;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.json.simple.JSONAware;
import org.json.simple.JSONObject;

@Entity
public class Note implements JSONAware{
	
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
	public Note setNoteId(long noteId) {
		this.noteId = noteId;
		return this;
	}
	public String getText() {
		return text;
	}
	public Note setText(String text) {
		this.text = text;
		return this;
	}
	public Timestamp getTimestamp() {
		return timestamp;
	}
	public Note setTimestamp(Timestamp timestamp) {
		this.timestamp = timestamp;
		return this;
	}
	public String getAuthorTeacherId() {
		return authorTeacherId;
	}
	public Note setAuthorTeacherId(String authorTeacherId) {
		this.authorTeacherId = authorTeacherId;
		return this;
	}
	public String getBelongsToStudent() {
		return belongsToStudent;
	}
	public Note setBelongsToStudent(String belongsToStudent) {
		this.belongsToStudent = belongsToStudent;
		return this;
	}
	@SuppressWarnings("unchecked")
	@Override
	public String toJSONString() {
		JSONObject obj = new JSONObject();
		
		obj.put("noteId", this.noteId);
		obj.put("text", this.text);
		obj.put("timestamp", this.timestamp);
		obj.put("authorTeacherId", this.authorTeacherId);
		obj.put("belongsToStudent", this.belongsToStudent);
		
		return obj.toString();
	}
	
}
