package de.sklw.studentnote.data;

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
	private Long noteId;
	
	private String text; 
	private Timestamp timestamp = new Timestamp(System.currentTimeMillis());
	private long authorTeacherId;
	private long belongsToStudent;
	
	
	public long getNoteId() {
		return noteId;
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
	public long getAuthorTeacherId() {
		return authorTeacherId;
	}
	public Note setAuthorTeacherId(long authorTeacherId) {
		this.authorTeacherId = authorTeacherId;
		return this;
	}
	public long getBelongsToStudent() {
		return belongsToStudent;
	}
	public Note setBelongsToStudent(long belongsToStudent) {
		this.belongsToStudent = belongsToStudent;
		return this;
	}
	@SuppressWarnings("unchecked")
	@Override
	public String toJSONString() {
		JSONObject obj = new JSONObject();
		
		obj.put("noteId", this.noteId);
		obj.put("text", this.text);
		obj.put("timestamp", this.timestamp.toString());
		obj.put("authorTeacherId", this.authorTeacherId);
		obj.put("belongsToStudent", this.belongsToStudent);
		
		return obj.toString();
	}
	
}
