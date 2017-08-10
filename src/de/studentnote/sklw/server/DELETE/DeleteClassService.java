package de.studentnote.sklw.server.DELETE;

import javax.ws.rs.DELETE;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("/deleteClass/{classId}")
public class DeleteClassService {

	@DELETE
	public void deleteClass(@PathParam("classId") long classId) {
		
		/*
		 * 
		 * TODO
		 * 
		 */
	}
}
