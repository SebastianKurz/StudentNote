package de.sklw.studentnote.login;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.Query;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

import de.sklw.studentnote.data.EMF;
import de.sklw.studentnote.data.Teacher;

@Path("/login/{mailAddress}/{password}")
public class LoginService {
	
	/*
	private EntityManager em;
	private List<Teacher> t_list;
	private Teacher t;
	*/
	UserService userService = UserServiceFactory.getUserService();
	
	/*
	@SuppressWarnings("unchecked")
	@GET
	@Produces("text/plain")
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
	}*/
	
	@GET
	@Produces("text/plain")
	public String login(@PathParam("mailAddress") String mailAddress, @PathParam("password") String passWord) {
		EntityManager em = EMF.getEntityManager();
		try {
			String email = mailAddress;
			String password = passWord;
			
			
			System.out.println("[INFO] The Parameters of the Query equals: ");
			System.out.println(email);
			System.out.println(password);
			
			if (!email.isEmpty() && !password.isEmpty()) {
				em.getTransaction().begin();
				
				// Lehrer anhand der E-Mail-Adresse suchen
				Query q = em.createQuery("SELECT t FROM Teacher t WHERE t.mailAddress = :email");
				q.setParameter("email", email);
				
				Teacher t = (Teacher) q.getSingleResult();
				
				em.getTransaction().commit();
	
				
				// Passwoerter vergleichen
				if (password.equals(t.getPassword())){
					// Bei richtigem Passwort wird der Teacher zurueckgegeben
					System.out.println(t.toJSONString());
					return t.toJSONString();
				} else {
					System.out.println("{\"error\":\"invalid username and/ or password\"}");
					return "{\"error\":\"invalid username and/ or password\"}";
				}
				
			} else {
				System.out.println("{\"error\":\"invalid username and/ or password\"}");
				return "{\"error\":\"please enter your username and password\"}";
			}
		} catch (NoResultException e) { // Exception wenn kein Ergebnis gefunden wurde
			System.out.println("{\"error\":\"invalid username and/ or password\"}");
			return "{\"error\":\"invalid username and/ or password\"}";
		} catch (Exception e) {
			System.out.println("{\"error\":\"can not log in\"}");
			return "{\"error\":\"can not log in\"}";
		} finally {
			if (em.getTransaction().isActive()) {
				em.getTransaction().rollback();
			}
			em.close();
		}
	}

}
