package de.sklw.studentnote.data;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public final class EMF {
	private static EntityManagerFactory emfInstance = Persistence
			.createEntityManagerFactory("transactions-optional");


	synchronized public static EntityManager getEntityManager() {
		return emfInstance.createEntityManager();
	}
}
