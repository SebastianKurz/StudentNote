package de.sklw.studentnote.GET;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.servlet.http.HttpServlet;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import de.sklw.studentnote.data.EMF;
import de.sklw.studentnote.data.Student;

@SuppressWarnings("serial")
@Path("/getStudent/{classId}")
public class GetStudentService extends HttpServlet{
	
	private EntityManager em;
	private List<Student> s_list;
	
	@GET
	@Produces("text/plain")
	public String allStudents(@PathParam("classId") long classId) {
		
		StringBuilder sb = new StringBuilder();
		
		em = EMF.getEntityManager();
		getEntities(classId);
		
		if(s_list.isEmpty()) {
			em.close();
			return "{\"error\" : \"wrong classId\"}";
		}else {			
			sb.append("{\"student\" : [");
			
			for(int i=0; i<s_list.size(); i++) {
				if(i !=0) sb.append(",");
				sb.append(s_list.get(i).toJSONString());
			}
			sb.append("]}");
			
			em.close();
			
			return sb.toString();
		}
	}
	
	@GET
	@Path("{studentId}")
	@Produces("text/plain")
	public String getStudent(@PathParam("studentId") long studentId) {
		
		em = EMF.getEntityManager();
		
		Student s = em.find(Student.class, studentId);
		
		if(s == null) {
			return "{\"info\":\"no entity with this ID found in storage\"}";
		}
		
		em.close();
		
		return s.toJSONString();
	}
	
	
	@SuppressWarnings("unchecked")
	public void getEntities(long classId) {
		Query q = em.createQuery("SELECT s FROM Student s WHERE s.belongsToClass = :classId");
		q.setParameter("classId", classId);
		
		this.s_list= (List<Student>)q.getResultList();
		this.s_list = new ArrayList<>(this.s_list);
		
	}
	
}
