package de.studentnote.sklw.server.DELETE;

import javax.ws.rs.DELETE;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("deleteNote/{noteId}")
public class DeleteNoteService {
	
	@DELETE
	public void deleteNote(@PathParam("noteId") long noteId) {
		
		/*
		 * 
		 * TODO
		 * 
		 */
	}
}
