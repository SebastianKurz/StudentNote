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
import de.sklw.studentnote.data.SchoolClass;
import de.sklw.studentnote.data.Student;

@SuppressWarnings("serial")
@Path("/deleteClass/{classId}")
public class DeleteClassService extends HttpServlet {

	private EntityManager em;

	@SuppressWarnings("unchecked")
	@DELETE
	@Produces("text/plain")
	public String deleteClass(@PathParam("classId") long classId) {

		em = EMF.getEntityManager();

		SchoolClass s = em.find(SchoolClass.class, classId);

		if (s == null) {
			return "{\"error\":\"Entity doesn't exist or is already deleted\"}";
		} else {

			Query q = em.createQuery("SELECT std FROM Student std WHERE std.belongsToClass = :classId");
			q.setParameter("classId", classId);

			// em.getTransaction().begin();

			List<Student> s_list = (List<Student>) q.getResultList();
			s_list = new ArrayList<>(s_list);

			if (s_list.size() > 0) {
				for (Student std : s_list) {
					Query q2 = em.createQuery("SELECT n FROM Note n WHERE n.belongsToStudent = :studentId");
					q2.setParameter("studentId", std.getStudentId());

					List<Note> n_list = (List<Note>) q2.getResultList();
					n_list = new ArrayList<>(n_list);

					if (n_list.size() > 0) {
						for (Note n : n_list) {
							em.getTransaction().begin();
							em.remove(n);
							em.getTransaction().commit();
						}
					}
					em.getTransaction().begin();
					em.remove(std);
					em.getTransaction().commit();
				}
			}
			em.getTransaction().begin();
			em.remove(s);
			em.getTransaction().commit();
		}
		em.close();

		return s.toJSONString();
	}
}
