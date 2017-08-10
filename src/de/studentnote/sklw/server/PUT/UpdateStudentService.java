package de.studentnote.sklw.server.PUT;

import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("/updateStudent/{studentId}/{belongsToClass}/{firstName}/{lastName}")
public class UpdateStudentService {

	@PUT
	public void updateStudent(@PathParam("studentId") long studentId,
							  @PathParam("belongsToClass") long classId,
							  @PathParam("firstName") String firstName,
							  @PathParam("lastName") String lastName) {
		
		/*
		 * 
		 * TODO
		 * 
		 */
	}
}
