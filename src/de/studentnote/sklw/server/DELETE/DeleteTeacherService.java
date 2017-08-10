package de.studentnote.sklw.server.DELETE;

import javax.ws.rs.DELETE;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("/deleteTeacher/{teacherId}")
public class DeleteTeacherService {
	
	@DELETE
	public void deleteTeacher(@PathParam("teacherId") long teacherId) {
		
		/*
		 * 
		 * TODO
		 * 
		 */
	}
}
