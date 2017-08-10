package de.studentnote.sklw.server.DELETE;

import javax.ws.rs.DELETE;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("deleteStudent/{studentId}")
public class DeleteStudentService {

	@DELETE
	public void deleteStudent(@PathParam("studentId") long studentId) {
		
		/*
		 * 
		 * TODO
		 * 
		 */
	}
}
