package de.studentnote.sklw.GET;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/getSchool/")
public class GetSchoolService {
	
	@GET
	@Produces("application/json")
	public String allSchools() {
		
		/*
		 * 
		 * TODO 
		 * 
		 */
		
		return "schools";
	}
	
	@GET
	@Path("{schoolId}")
	@Produces("application/json")
	public String specificSchool(@PathParam("schoolId") long schoolId) {
		
		/*
		 * 
		 * TODO	 
		 * 
		 */
		
		return "specific Schools";
	}
}
