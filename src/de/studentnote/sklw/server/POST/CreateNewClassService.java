package de.studentnote.sklw.server.POST;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("/newClass/{name}/{level}/{schoolId}")
public class CreateNewClassService {
	
	@POST
	public void newClass(@PathParam("name") String name, 
						 @PathParam("level") String level,
						 @PathParam("schoolId") long schoolId) {
		
		/*
		 * 
		 * TODO
		 * 
		 */
	}
}
