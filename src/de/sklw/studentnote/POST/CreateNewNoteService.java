package de.sklw.studentnote.POST;

import javax.persistence.EntityManager;
import javax.servlet.http.HttpServlet;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import de.sklw.studentnote.data.EMF;
import de.sklw.studentnote.data.Note;

@SuppressWarnings("serial")
@Path("/newNote/{text}/{authorId}/{studentId}")
public class CreateNewNoteService extends HttpServlet{
	
	private EntityManager em;
	private Note n;
	
	@POST
	@Produces("text/plain")
	public String newNote(@PathParam("text") String text,
						@PathParam("authorId") long authorId,
						@PathParam("studentId") long studentId) {
		
		em = EMF.getEntityManager();
		
		n = new Note();
		n.setAuthorTeacherId(authorId)
		 .setBelongsToStudent(studentId)
		 .setText(text);
		
		em.getTransaction().begin();
		em.persist(n);
		em.getTransaction().commit();
		em.close();
		
		return n.toJSONString();
	}
}
