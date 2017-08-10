package de.studentnote.sklw.server.PUT;

import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("/updateTeacher/{teacherId}/{firstName}/{lastName}/{mailAddress}/{password}")
public class UpdateTeacherService {

	@PUT
	public void updateTeacher(@PathParam("teacherId") long teacherId,
							  @PathParam("firstName") String firstName,
							  @PathParam("lastName") String lastName,
							  @PathParam("mailAddress") String mailAddress,
							  @PathParam("password") String password) {
		
		/*
		 * 
		 * TODO 
		 * 
		 */
	}
}
