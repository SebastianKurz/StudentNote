package de.sklw.studentnote.DELETE;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.servlet.http.HttpServlet;
import javax.ws.rs.DELETE;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import de.sklw.studentnote.data.EMF;
import de.sklw.studentnote.data.Note;
import de.sklw.studentnote.data.Student;

@SuppressWarnings("serial")
@Path("deleteStudent/{studentId}")
public class DeleteStudentService extends HttpServlet{
	
	private EntityManager em;
	
	@SuppressWarnings("unchecked")
	@DELETE
	@Produces("text/plain")
	public String deleteStudent(@PathParam("studentId") long studentId) {
		
		em = EMF.getEntityManager();
		
		//zu loeschenden Schueler finden
		Student s = em.find(Student.class, studentId);
		if(s == null) {
			return "{\"error\":\"Entity doesn't exist or is already deleted\"}";
		}
		else {
			Query q = em.createQuery("SELECT n FROM Note n WHERE n.belongsToStudent = :studentId");
			q.setParameter("studentId", studentId);
			
			//alle Notizen
			List<Note> n_list = q.getResultList();
			n_list = new ArrayList<>(n_list);
			
			if(n_list.size()>0) {
				//loeschen jeder Notiz
				for(Note n : n_list) {
					em.getTransaction().begin();
					em.remove(n);
					em.getTransaction().commit();
				}
			}
			
			//loeschen des Student
			em.getTransaction().begin();
			em.remove(s);
			em.getTransaction().commit();
		}
		em.close();
		
		return s.toJSONString();
	}
}
