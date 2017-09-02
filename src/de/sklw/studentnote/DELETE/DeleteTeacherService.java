package de.sklw.studentnote.DELETE;

import javax.persistence.EntityManager;
import javax.servlet.http.HttpServlet;
import javax.ws.rs.DELETE;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import de.sklw.studentnote.data.EMF;
import de.sklw.studentnote.data.Teacher;

@SuppressWarnings("serial")
@Path("/deleteTeacher/{teacherId}")
public class DeleteTeacherService extends HttpServlet{
	
	private EntityManager em;
	
	@DELETE
	@Produces("application/json")
	public String deleteTeacher(@PathParam("teacherId") long teacherId) {
		
		em = EMF.getEntityManager();
		
		Teacher t = em.find(Teacher.class, teacherId);
		
		if(t == null) {
			return "{\"error\":\"Entity doesn't exist or is already deleted\"}";
		}
		else {
			em.getTransaction().begin();
			em.remove(t);
			em.getTransaction().commit();
		}
		em.close();
		
		return t.toJSONString();
	}
}
