package de.sklw.studentnote.POST;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.servlet.http.HttpServlet;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import de.sklw.studentnote.data.EMF;
import de.sklw.studentnote.data.Student;

@SuppressWarnings("serial")
@Path("/newStudent/{firstName}/{lastName}/{classId}")
public class CreateNewStudentService extends HttpServlet{
	
	private Student s;
	private EntityManager em;
	
	@POST
	@Produces("text/plain")
	public String newStudent(@PathParam("firstName") String firstName,
						   @PathParam("lastName") String lastName,
						   @PathParam("classId") long classId) {
		
		em = EMF.getEntityManager();
		
		s = new Student();
		s.setFirstName(firstName)
		 .setLastName(lastName)
		 .setIdOfClass(classId);
		
		if(studentExists(firstName, lastName, classId)) {
			return "{\"error\":\"Entity exists\"}";
		}else {
			em = EMF.getEntityManager();
			
			em.getTransaction().begin();
			em.persist(s);
			em.getTransaction().commit();
			em.close();
			
			return s.toJSONString();
		}
	}
	
	public boolean studentExists(String firstName, String lastName, long classId) {
		boolean exists = false;
		
		Query q = em.createQuery("SELECT s FROM Student s WHERE s.belongsToClass = :belongsToClass");
		q.setParameter("belongsToClass", classId);
		
		@SuppressWarnings("unchecked")
		List<Student> s_list = (List<Student>)q.getResultList();
		s_list = new ArrayList<>(s_list);
		
		for(Student s : s_list) {
			if(s.getFirstName().equals(firstName)&&s.getLastName().equals(lastName)) {
				exists = true;
				break;
			}else continue;
		}
		
		em = EMF.getEntityManager();
		return exists;
	}
}
