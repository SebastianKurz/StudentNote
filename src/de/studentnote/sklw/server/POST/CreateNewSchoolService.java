package de.studentnote.sklw.server.POST;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;


@Path("/newSchool/{name}")
public class CreateNewSchoolService {
	
	@POST
	public void newSchool(@PathParam("name") String name) {
		
		/* 
		 * 
		 * TODO 
		 * 
		 * */
	}
	
}
