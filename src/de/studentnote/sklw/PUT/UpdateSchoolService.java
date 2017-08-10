package de.studentnote.sklw.PUT;

import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("updateSchool/{schoolId}/{name}")
public class UpdateSchoolService {
	
	@PUT
	public void updateSchool(@PathParam("schoolId") long schoolId,
							 @PathParam("name") String name) {
		
		/* 
		 * 
		 * TODO 
		 * 
		 * */
	}
}
