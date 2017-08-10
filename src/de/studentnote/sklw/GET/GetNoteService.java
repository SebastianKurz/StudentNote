package de.studentnote.sklw.GET;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/getNote/")
public class GetNoteService {

	@GET
	@Produces("application/json")
	public String allNotes() {
		
		/*
		 * 
		 * TODO 
		 * 
		 */
		
		return "notes";
	}
	
	@GET
	@Path("{noteId}")
	@Produces("application/json")
	public String specificNote(@PathParam("noteId") long noteId) {
		
		/*
		 * 
		 * TODO 
		 * 
		 */
		
		return "note";
	}
}
