package de.studentnote.sklw.server.GET;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/getStudent/")
public class GetStudentService {
	
	@GET
	@Produces("application/json")
	public String allStudents() {
		
		/*
		 *
		 * TODO
		 *
		 */
		
		return "students";
	}
	
	@GET
	@Path("{studentId}")
	@Produces("application/json")
	public String allStudents(@PathParam("studentId") long studentId) {
		
		/*
		 *
		 * TODO
		 *
		 */
		
		return "students";
	}
	
	
}
