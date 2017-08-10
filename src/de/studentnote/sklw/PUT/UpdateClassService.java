package de.studentnote.sklw.PUT;

import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("/updateClass/{classId}/{level}/{name}")
public class UpdateClassService {
	
	@PUT
	public void newClass(@PathParam("name") String name, 
			 			 @PathParam("level") String level,
			 			 @PathParam("classId") long classId) {
		/*
		 * 
		 * TODO
		 * 
		 */
	}
}
