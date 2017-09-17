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
import de.sklw.studentnote.data.School;


@SuppressWarnings("serial")
@Path("/newSchool/{name}")
public class CreateNewSchoolService extends HttpServlet{
	
	private School s;
	private EntityManager em;
	
	@POST
	@Produces("text/plain")
	public String newSchool(@PathParam("name") String name) {
		
		em = EMF.getEntityManager();
		s = new School();
		s.setName(name);
		
		if(schoolExists(name)) {
			return "{\"error\":\"Entity exists\"}";
		}
		else {
			em = EMF.getEntityManager();
			
			em.getTransaction().begin();
			em.persist(s);
			em.getTransaction().commit();
			em.close();
			return s.toJSONString();
		}
		
		
		
	}
	
	private boolean schoolExists(String name) {
		boolean exists = false;
		
		Query q = em.createQuery("SELECT s FROM School s");
		
		@SuppressWarnings("unchecked")
		List<School> s_list = (List<School>)q.getResultList();
		s_list = new ArrayList<>(s_list);
		
		for(School s : s_list) {
			if(s.getName().equals(name)) {
				exists = true;
				break;
			}else continue;
		}
		
		em.close();
		return exists;
	}
	
}
