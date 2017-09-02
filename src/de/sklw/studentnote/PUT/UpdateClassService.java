package de.sklw.studentnote.PUT;

import javax.persistence.EntityManager;
import javax.servlet.http.HttpServlet;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import de.sklw.studentnote.data.EMF;
import de.sklw.studentnote.data.SchoolClass;

@SuppressWarnings("serial")
@Path("/updateClass/{classId}/{level}/{name}")
public class UpdateClassService extends HttpServlet{
	
	private EntityManager em;
	private SchoolClass s;
	
	@PUT
	@Produces("application/json")
	public String updateClass(@PathParam("name") String name, 
			 			 @PathParam("level") String level,
			 			 @PathParam("classId") long classId) {

		em = EMF.getEntityManager();
		
		s = em.find(SchoolClass.class, classId);
		if(s == null) {
			return "{\"error\":\"Entity of kind SchoolClass does not exist\"}";
		}
		else {
			em.getTransaction().begin();
			s.setName(name)
			 .setLevel(level);
			em.getTransaction().commit();
		}
		em.close();
		return s.toJSONString();
		
	}
}
