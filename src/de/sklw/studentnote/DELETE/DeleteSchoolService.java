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
import de.sklw.studentnote.data.School;
import de.sklw.studentnote.data.SchoolClass;
import de.sklw.studentnote.data.Student;
import de.sklw.studentnote.data.Teacher;

@SuppressWarnings("serial")
@Path("/deleteSchool/{schoolId}")
public class DeleteSchoolService extends HttpServlet{
	
	private EntityManager em;
	
	@SuppressWarnings("unchecked")
	@DELETE
	@Produces("text/plain")
	public String deleteSchool(@PathParam("schoolId") long schoolId) {
		
		em = EMF.getEntityManager();
		
		//Schule aus der DB holen
		School s = em.find(School.class, schoolId);
		if(s == null) {
			return "{\"error\":\"Entity doesn't exist or is already deleted\"}";
		}
		else {
			
			//Schulklassen der Schule auswaehlen
			Query q = em.createQuery("SELECT cl FROM SchoolClass cl WHERE cl.belongsToSchool =:schoolId");
			q.setParameter("schoolId", schoolId);
			
			//Alle Klassen werden in der Liste gespeichert
			List<SchoolClass> cl_list = (List<SchoolClass>) q.getResultList();
			cl_list = new ArrayList<>(cl_list);
			
			if(cl_list.size()>0) {
				for(SchoolClass cl : cl_list) {
					//fuer jede Klasse werden die Schueler geholt
					Query q2 = em.createQuery("SELECT std FROM Student std WHERE std.belongsToClass = :classId");
					q2.setParameter("classId", cl.getClassId());
					
					List<Student> s_list = (List<Student>) q2.getResultList();
					s_list = new ArrayList<>(s_list);
					
					if(s_list.size()>0) {
						for(Student std : s_list) {
							//fuer jeden einzelnen schueler werden die Notizen geholt
							Query q3 = em.createQuery("SELECT n FROM Note n WHERE n.belongsToStudent = :studentId");
							q3.setParameter("studentId", std.getStudentId());
							
							//alle Notizen werden in der Liste gespeichert
							List<Note> n_list = (List<Note>) q3.getResultList();
							n_list = new ArrayList<>(n_list);
							
							if(n_list.size()>0) {
								//loeschen jeder Notiz
								for(Note n : n_list) {
									em.getTransaction().begin();
									em.remove(n);
									em.getTransaction().commit();
								}
							}
							
							//loeschen jedes Schuelers
							em.getTransaction().begin();
							em.remove(std);
							em.getTransaction().commit();
						}
					}
					
					//loeschen jeder Klasse
					em.getTransaction().begin();
					em.remove(cl);
					em.getTransaction().commit();
				}
			}
			
			Query q4 = em.createQuery("SELECT t FROM Teacher t WHERE t.belongsToSchool =:schoolId");
			q4.setParameter("schoolId", schoolId);
			
			//jeder Lehrer der Schule
			List<Teacher> t_list = (List<Teacher>) q4.getResultList();
			t_list = new ArrayList<>(t_list);
			
			if(t_list.size()>0) {
				for(Teacher t : t_list) {
					//loeschen jeden Lehrers
					em.getTransaction().begin();
					em.remove(t);
					em.getTransaction().commit();
				}
			}
			
			//loeschen der Schule
			em.getTransaction().begin();
			em.remove(s);
			em.getTransaction().commit();
		}
		em.close();
		
		return s.toJSONString();
		
	}
}
