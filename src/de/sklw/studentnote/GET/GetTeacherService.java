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
import de.sklw.studentnote.data.Teacher;

@SuppressWarnings("serial")
@Path("/getTeacher/{schoolId}")
public class GetTeacherService extends HttpServlet{
	
	private EntityManager em;
	private List<Teacher> t_list;
	
	@GET
	@Produces("application/json")
	public String allTeachers(@PathParam("schoolId") long schoolId) {
		
		StringBuilder sb = new StringBuilder();
	
		em = EMF.getEntityManager();
		
		getEntities(schoolId);
		
		if(t_list.isEmpty()) {
			em.close();
			return "{\"error\" : \"wrong schoolId\"}";
		}else {			
			sb.append("{\"teacher\" : [");
			for(int i=0; i<t_list.size(); i++) {
				if(i !=0) sb.append(",");
				sb.append(t_list.get(i).toJSONString());
			}
			sb.append("]}");
			
			em.close();
			
			return sb.toString();
		}
		
	}
	
	@GET
	@Path("{teacherId}")
	@Produces("application/json")
	public String specificTeacher(@PathParam("teacherId") long teacherId) {
	
		em = EMF.getEntityManager();
		Teacher t = em.find(Teacher.class, teacherId);
		
		if(t == null) {
			return "{\"info\":\"no entity with this ID found in storage\"}";
		}
		
		return t.toJSONString();
	}
	
	@SuppressWarnings("unchecked")
	public void getEntities(long schoolId) {
		
		Query q = em.createQuery("SELECT t FROM Teacher t WHERE t.belongsToSchool = :schoolId");
		q.setParameter("schoolId", schoolId);
		

		this.t_list = (List<Teacher>)q.getResultList();
		this.t_list= new ArrayList<>(this.t_list);	
	}
}
