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

import de.sklw.studentnote.data.SchoolClass;
import de.sklw.studentnote.data.EMF;

@SuppressWarnings("serial")
@Path("/newClass/{name}/{level}/{schoolId}")
public class CreateNewClassService extends HttpServlet{
	
	private SchoolClass cl = new SchoolClass();
	private EntityManager em;
	
	
	@POST
	@Produces("application/json")
	public String newClass(@PathParam("name") String name, 
						 @PathParam("level") String level,
						 @PathParam("schoolId") long schoolId) {
		
		
		em = EMF.getEntityManager();
		
		cl.setName(name)
		  .setLevel(level)
		  .setSchool(schoolId);
		
		if(schoolClassExists(name, level, schoolId)) {
			return "{\"error\":\"Entity already exists\"}";
		}else {
			em = EMF.getEntityManager();
			
			em.getTransaction().begin();
			em.persist(cl);
			em.getTransaction().commit();
			em.close();			
			return cl.toJSONString();		
		}		
	}
	
	@SuppressWarnings({"unchecked" })
	public boolean schoolClassExists(String name, String level, long schoolId) {
		boolean exists = false;
		
		Query q = em.createQuery("SELECT cl FROM SchoolClass cl WHERE cl.belongsToSchool = :belongsToSchool");
		q.setParameter("belongsToSchool", schoolId);
		
		List<SchoolClass> cl_list = (List<SchoolClass>)q.getResultList();
		cl_list = new ArrayList<>(cl_list);
		
		for(SchoolClass cl : cl_list) {
			if((cl.getLevel().equals(level))&&(cl.getName().equals(name))) {
				exists = true;
				break;
			}else continue;
		}
		
		em.close();
		return exists;
	}
}
