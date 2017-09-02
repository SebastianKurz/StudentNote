package de.sklw.studentnote.PUT;

import javax.persistence.EntityManager;
import javax.servlet.http.HttpServlet;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import de.sklw.studentnote.data.EMF;
import de.sklw.studentnote.data.Teacher;

@SuppressWarnings("serial")
@Path("/updateTeacher/{teacherId}/{firstName}/{lastName}/{mailAddress}/{password}")
public class UpdateTeacherService extends HttpServlet{

	private EntityManager em;
	private Teacher t;
	
	@PUT
	@Produces("application/json")
	public String updateTeacher(@PathParam("teacherId") long teacherId,
							  @PathParam("firstName") String firstName,
							  @PathParam("lastName") String lastName,
							  @PathParam("mailAddress") String mailAddress,
							  @PathParam("password") String password) {
		
		em = EMF.getEntityManager();
		
		t = em.find(Teacher.class, teacherId);
		
		if(t == null) {
			return "{\"error\":\"Entity doesn't exist or is already deleted\"}";
		}
		else {
			em.getTransaction().begin();
			t.setFirstName(firstName)
			 .setLastName(lastName)
			 .setMailAddress(mailAddress)
			 .setPassword(password);
			em.getTransaction().commit();
		}
		em.close();
		
		return t.toJSONString();
	}
}
