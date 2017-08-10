package de.studentnote.sklw.server.POST;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("/newStudent/{firstName}/{lastName}/{classId}")
public class CreateNewStudentService {
	
	@POST
	public void newStudent(@PathParam("firstName") String firstName,
						   @PathParam("lastName") String lastName,
						   @PathParam("classId") long classId) {
		
		/*
		 *
		 *TODO
		 *
		 */
	}
}
