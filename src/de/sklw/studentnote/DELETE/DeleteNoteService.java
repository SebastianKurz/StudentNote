package de.sklw.studentnote.DELETE;

import javax.persistence.EntityManager;
import javax.servlet.http.HttpServlet;
import javax.ws.rs.DELETE;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import de.sklw.studentnote.data.EMF;
import de.sklw.studentnote.data.Note;

@SuppressWarnings("serial")
@Path("deleteNote/{noteId}")
public class DeleteNoteService extends HttpServlet{
	
	private EntityManager em;
	
	@DELETE
	@Produces("text/plain")
	public String deleteNote(@PathParam("noteId") long noteId) {
		
		em = EMF.getEntityManager();
		
		Note n = em.find(Note.class, noteId);
		if(n == null) {
			return "{\"error\":\"Entity doesn't exist or is already deleted\"}";
		}
		else {
			em.getTransaction().begin();
			em.remove(n);
			em.getTransaction().commit();
		}
		em.close();
		
		return n.toJSONString();
	}
}
