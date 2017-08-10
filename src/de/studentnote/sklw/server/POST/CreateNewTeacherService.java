package de.studentnote.sklw.server.POST;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("/newTeacher/{firstName}/{lastName}/{mailaddress}/{password}/{schoolId}")
public class CreateNewTeacherService {
	
	@POST
	public void newTeacher(@PathParam("firstName") String firstName,
						   @PathParam("lastName") String lastName,
						   @PathParam("mailaddress") String mailaddress,
						   @PathParam("password") String password,
						   @PathParam("schoolId") long schoolId) {
		
		/*
		 * 
		 * TODO
		 * 
		 */
	}
}
