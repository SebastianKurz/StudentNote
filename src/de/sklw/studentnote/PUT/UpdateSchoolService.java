package de.sklw.studentnote.PUT;

import javax.persistence.EntityManager;
import javax.servlet.http.HttpServlet;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import de.sklw.studentnote.data.EMF;
import de.sklw.studentnote.data.School;

@SuppressWarnings("serial")
@Path("updateSchool/{schoolId}/{name}")
public class UpdateSchoolService extends HttpServlet{
	
	private EntityManager em;
	private School s;
	
	@PUT
	@Produces("application/json")
	public String updateSchool(@PathParam("schoolId") long schoolId,
							 @PathParam("name") String name) {
		
		em = EMF.getEntityManager();
		
		s = em.find(School.class, schoolId);
		if(s == null) {
			return "{\"error\":\"Entity of kind School does not exist\"}";
		}
		else {
			em.getTransaction().begin();
			s.setName(name);
			em.getTransaction().commit();
		}
		em.close();
		
		return s.toJSONString();
	}
}
