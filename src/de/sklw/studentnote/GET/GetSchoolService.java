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
import de.sklw.studentnote.data.School;

@SuppressWarnings("serial")
@Path("/getSchool/")
public class GetSchoolService extends HttpServlet{
	
	private EntityManager em;
	
	@GET
	@Produces("application/json")
	public String allSchools() {
		
		em = EMF.getEntityManager();
		StringBuilder sb = new StringBuilder();
		
		Query q = em.createQuery("SELECT s FROM School s");
		@SuppressWarnings("unchecked")
		List<School> s_list= q.getResultList();
		
		s_list = new ArrayList<>(s_list);
		
		sb.append("{\"school\" : [");
		
		for(int i=0; i<s_list.size(); i++) {
			if(i !=0) sb.append(",");
			sb.append(s_list.get(i).toJSONString());
		}
		sb.append("]}");
		
		em.close();
		
		return sb.toString();
	}
	
	@GET
	@Path("{schoolId}")
	@Produces("application/json")
	public String specificSchool(@PathParam("schoolId") long schoolId) {
		
		em = EMF.getEntityManager();
		
		School s = em.find(School.class, schoolId);
		
		if(s == null) {
			return "{\"info\":\"no entity with this ID found in storage\"}";
		}
		
		return s.toJSONString();
	}
}
