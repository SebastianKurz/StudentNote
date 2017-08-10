package de.studentnote.sklw.server.DELETE;

import javax.ws.rs.DELETE;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("/deleteSchool/{schoolId}")
public class DeleteSchoolService {
	
	@DELETE
	public void deleteSchool(@PathParam("schoolId") long schoolId) {
		
		/*
		 * 
		 * TODO
		 * 
		 */
	}
}
