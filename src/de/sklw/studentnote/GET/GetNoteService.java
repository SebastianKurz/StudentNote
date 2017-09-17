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
import de.sklw.studentnote.data.Note;

@SuppressWarnings("serial")
@Path("/getNote/{studentId}")
public class GetNoteService extends HttpServlet{

	private EntityManager em;
	private List<Note> n_list;
	
	@GET
	@Produces("text/plain")
	public String allNotes(@PathParam("studentId") long studentId) {
		
		em = EMF.getEntityManager();
		StringBuilder sb = new StringBuilder();
		
		getEntities(studentId);
		
		if(n_list.isEmpty()) {
			em.close();
			return "{\"error\" : \"wrong studentId\"}";
		}else {
			sb.append("{\"note\" : [");
			
			for(int i=0; i<n_list.size(); i++) {
				if(i !=0) sb.append(",");
				sb.append(n_list.get(i).toJSONString());
			}
			sb.append("]}");
			
			em.close();
			
			return sb.toString();
		}
		
	}
	
	@GET
	@Path("{noteId}")
	@Produces("text/plain")
	public String specificNote(@PathParam("studentId") long studentId ,@PathParam("noteId") long noteId) {
		em = EMF.getEntityManager();
		
		getEntities(studentId);
		
		for(Note n : n_list) {
			if(n.getNoteId() == noteId) {
				return n.toJSONString();
			}
		}
		em.close();
		return "{\"info\":\"no Node with this ID found\"}";
	}
	
	@SuppressWarnings("unchecked")
	public void getEntities(long studentId) {
		Query q = em.createQuery("SELECT n FROM Note n WHERE n.belongsToStudent = :studentId");
		q.setParameter("studentId", studentId);
		
		this.n_list = (List<Note>)q.getResultList();
		this.n_list = new ArrayList<>(this.n_list);
	}
}
