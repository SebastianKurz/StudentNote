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
import de.sklw.studentnote.data.Teacher;

@SuppressWarnings("serial")
@Path("/newTeacher/{firstName}/{lastName}/{mailaddress}/{password}/{schoolId}")
public class CreateNewTeacherService extends HttpServlet{
	
	private Teacher t;
	private EntityManager em;
	
	@POST
	@Produces("application/json")
	public String newTeacher(@PathParam("firstName") String firstName,
						   @PathParam("lastName") String lastName,
						   @PathParam("mailaddress") String mailaddress,
						   @PathParam("password") String password,
						   @PathParam("schoolId") long schoolId) {
		
		em = EMF.getEntityManager();
		
		t = new Teacher();
		t.setFirstName(firstName)
		 .setLastName(lastName)
		 .setMailAddress(mailaddress)
		 .setPassword(password)
		 .setBelongsToSchool(schoolId);
		
		if(teacherExists(firstName, lastName, mailaddress, schoolId)) {
			return "{\"error\":\"Entity exists\"}";
		}
		else {
			em = EMF.getEntityManager();
			
			em.getTransaction().begin();
			em.persist(t);
			em.getTransaction().commit();
			em.close();
			
			return t.toJSONString();
		}
		
	}
	
	public boolean teacherExists(String firstName, String lastName, 
								 String mailaddress, long schoolId) {
		boolean exists = false;
		
		Query q = em.createQuery("SELECT t FROM Teacher t WHERE t.belongsToSchool = :schoolId");
		q.setParameter("schoolId", schoolId);
		
		@SuppressWarnings("unchecked")
		List<Teacher> t_list = (List<Teacher>)q.getResultList();
		t_list = new ArrayList<>(t_list);
		
		for(Teacher t : t_list) {
			if(t.getFirstName().equals(firstName)&&
			   t.getLastName().equals(lastName)&&
			   t.getMailAddress().equals(mailaddress)) {
				
				exists = true;
				break;
			} else continue;
		}
		
		em.close();
		return exists;
	}
}
