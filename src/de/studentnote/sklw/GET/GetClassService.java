package de.studentnote.sklw.GET;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/getClass/")
public class GetClassService {

	@GET
	@Produces("application/json")
	public String allClasses() {
		
		/*
		 * 
		 * TODO
		 * 
		 */
		
		return "classes";
	}
	
	@GET
	@Path("{classId}")
	@Produces("application/json")
	public String specificClass(@PathParam("classId") long classId) {
		
		/*
		 * 
		 * TODO
		 * 
		 */
		
		return "class";
	}
}
