package de.sklw.studentnote.DELETE;

import javax.persistence.EntityManager;
import javax.servlet.http.HttpServlet;
import javax.ws.rs.DELETE;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import de.sklw.studentnote.data.EMF;
import de.sklw.studentnote.data.School;

@SuppressWarnings("serial")
@Path("/deleteSchool/{schoolId}")
public class DeleteSchoolService extends HttpServlet{
	
	private EntityManager em;
	
	@DELETE
	@Produces("application/json")
	public String deleteSchool(@PathParam("schoolId") long schoolId) {
		
		em = EMF.getEntityManager();
		
		School s = em.find(School.class, schoolId);
		if(s == null) {
			return "{\"error\":\"Entity doesn't exist or is already deleted\"}";
		}
		else {
			em.getTransaction().begin();
			em.remove(s);
			em.getTransaction().commit();
		}
		em.close();
		
		return s.toJSONString();
		
	}
}
