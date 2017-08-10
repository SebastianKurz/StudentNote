package de.studentnote.sklw.GET;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/getTeacher/")
public class GetTeacherService {
	
	@GET
	@Produces("application/json")
	public String allTeachers() {
		
		/*
		 * 
		 * TODO 
		 * 
		 */
		
		return "teachers";
	}
	
	@GET
	@Path("{teacherId}")
	@Produces("application/json")
	public String specificTeacher(@PathParam("teacherId") long teacherId) {
		
		/*
		 * 
		 * TODO 
		 * 
		 */
		
		return "teacher";
	}
}
