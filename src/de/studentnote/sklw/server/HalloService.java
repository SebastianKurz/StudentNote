package de.studentnote.sklw.server;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/hello")
public class HalloService {

	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String plainText() {
		return "hello";
	}
	
	@GET
	@Produces(MediaType.TEXT_XML)
	public String xmlHello() {
		return "<?xml version=\"1.0\"?>" + "<hello> Hello Jersey I" + "</hello>";
	}
	
	@GET
	@Produces(MediaType.TEXT_HTML)
	public String htmlHello() {
		return "<html> " + "<title>" + "Hello Jersey II" + "</title>"
		        + "<body><h1>" + "Hello Jersey" + "</body></h1>" + "</html> ";
	}
}
