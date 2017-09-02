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

import de.sklw.studentnote.data.SchoolClass;
import de.sklw.studentnote.data.EMF;

@SuppressWarnings("serial")
@Path("/getClass/{schoolId}")
public class GetClassService extends HttpServlet{
	
	private EntityManager em;
	private List<SchoolClass> cl_list;

	@GET
	@Produces("application/json")
	public String allClasses(@PathParam("schoolId") long schoolId) {
		
		em = EMF.getEntityManager();
		StringBuilder sb = new StringBuilder();
		
		getEntities(schoolId);
		
		if(cl_list.isEmpty()) {
			em.close();
			return "{\"error\" : \"wrong schoolId\"}";
		}else {
		
			sb.append("{\"schoolClass\" : [");
		
			for(int i = 0; i < cl_list.size(); i++) {
				if(i != 0) sb.append(",");
				sb.append(cl_list.get(i).toJSONString());
			}
		
			sb.append("]}");
		
			em.close();
		
			return sb.toString();
		}
	}
	
	
	@GET
	@Path("{classId}")
	@Produces("application/json")
	public String specificClass(@PathParam("classId") long classId) {
		
		em = EMF.getEntityManager();
		SchoolClass cl = em.find(SchoolClass.class, classId);
		em.close();
		
		if(cl == null) {
			return "{\"error\":\"no entity with this ID was found in storage\"}";
		}
		
		return cl.toJSONString();
	}
	
	@SuppressWarnings("unchecked")
	private void getEntities(long schoolId) {
		
		Query q = em.createQuery("SELECT cl FROM SchoolClass cl WHERE cl.belongsToSchool = :schoolId");
		q.setParameter("schoolId", schoolId);
	
		this.cl_list = (List<SchoolClass>)q.getResultList();
		this.cl_list = new ArrayList<>(this.cl_list);
	}
}
