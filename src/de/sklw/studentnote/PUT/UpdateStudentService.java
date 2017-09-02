package de.sklw.studentnote.PUT;

import javax.persistence.EntityManager;
import javax.servlet.http.HttpServlet;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import de.sklw.studentnote.data.EMF;
import de.sklw.studentnote.data.Student;

@SuppressWarnings("serial")
@Path("/updateStudent/{studentId}/{belongsToClass}/{firstName}/{lastName}")
public class UpdateStudentService extends HttpServlet{

	private EntityManager em;
	private Student s;
	
	@PUT
	@Produces("application/json")
	public String updateStudent(@PathParam("studentId") long studentId,
							  @PathParam("belongsToClass") long classId,
							  @PathParam("firstName") String firstName,
							  @PathParam("lastName") String lastName) {
		
		em = EMF.getEntityManager();
		
		s = em.find(Student.class, studentId);
		if(s == null) {
			return "{\"error\":\"Entity doesn't exist or is already deleted\"}";
		}
		else {
			em.getTransaction().begin();
			s.setFirstName(firstName)
			 .setLastName(lastName)
			 .setIdOfClass(classId);
			em.getTransaction().commit();
		}
		em.close();
		
		return s.toJSONString();
	}
}
