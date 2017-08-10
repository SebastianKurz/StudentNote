package de.studentnote.sklw.server.POST;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("/newNote/{text}/{authorId}/{studentId}")
public class CreateNewNoteService {
	
	@POST
	public void newNote(@PathParam("text") String text,
						@PathParam("authorId") long authorId,
						@PathParam("studentId") long studentId) {
		
		/*
		 *
		 *TODO
		 *
		 */
	}
}
