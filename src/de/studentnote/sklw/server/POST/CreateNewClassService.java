package de.studentnote.sklw.server.POST;

import javax.persistence.EntityManager;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import org.json.simple.JSONObject;

import de.studentnote.sklw.data.Class;
import de.studentnote.sklw.data.EMF;

@Path("/newClass/{name}/{level}/{schoolId}")
public class CreateNewClassService {
	
	private Class cl = new Class();
	private EntityManager em;
	
	@POST
	@Produces("application/json")
	public String newClass(@PathParam("name") String name, 
						 @PathParam("level") String level,
						 @PathParam("schoolId") long schoolId) {
		
		cl.setName(name)
		  .setLevel(level)
		  .setSchool(schoolId);
		
		em = EMF.getEntityManager();
		em.persist(cl);
		em.close();
		
		return cl.toJSONString();
		
		/*
		 * Derzeit fliegt eine exception, wenn man eine Request startet
		 */
	}
}
