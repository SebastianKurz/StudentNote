package de.studentnote.sklw.server.POST;

import javax.persistence.EntityManager;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import org.json.simple.JSONObject;

import de.studentnote.data.Class;
import de.studentnote.data.EMF;

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
		
		JSONObject obj = new JSONObject();
		obj.put("name", name);
		obj.put("level", level);
		obj.put("schoolId", schoolId);
		
		return obj.toString();
		
		//em = EMF.getEntityManager();
		//em.persist(cl);
		
		
		/*
		 * Derzeit fliegt eine exception, wenn man eine Request startet
		 * "WARNUNG: Unable to create validator handler"
		 */
	}
}
