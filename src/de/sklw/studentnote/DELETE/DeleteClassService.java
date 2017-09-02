package de.sklw.studentnote.DELETE;

import javax.persistence.EntityManager;
import javax.servlet.http.HttpServlet;
import javax.ws.rs.DELETE;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import de.sklw.studentnote.data.EMF;
import de.sklw.studentnote.data.SchoolClass;

@SuppressWarnings("serial")
@Path("/deleteClass/{classId}")
public class DeleteClassService extends HttpServlet{

	private EntityManager em;
	
	@DELETE
	@Produces("application/json")
	public String deleteClass(@PathParam("classId") long classId) {
		
		em = EMF.getEntityManager();
		
		SchoolClass s = em.find(SchoolClass.class, classId);
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
