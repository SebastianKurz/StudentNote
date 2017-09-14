package de.sklw.studentnote.login;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import de.sklw.studentnote.data.EMF;
import de.sklw.studentnote.data.Teacher;

@Path("/login/{mailAddress}")
public class LoginService {
	
	private EntityManager em;
	private List<Teacher> t_list;
	private Teacher t;
	
	@SuppressWarnings("unchecked")
	@GET
	@Produces("application/json")
	public String getTeacherByMailAddress(@PathParam("mailAddress") String mailAddress) {
		
		System.out.println("Query parameter equals: " + mailAddress);
		
		em = EMF.getEntityManager();
		Query q = em.createQuery("SELECT t FROM Teacher t WHERE t.mailAddress = :mailAddress");
		q.setParameter("mailAddress", mailAddress);
		
		this.t_list = (List<Teacher>)q.getResultList();
		t_list = new ArrayList<>(t_list);
		
		if(t_list.size() > 0) {
			t = t_list.get(0);
			System.out.println(t.toJSONString());
			return t.toJSONString();
		}
		else {
			System.out.println("{\"info\":\"no entity with this mail address found in storage\"}");
			return "{\"info\":\"no entity with this mail address found in storage\"}";
		}
	}

}
