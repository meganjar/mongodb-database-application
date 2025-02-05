Overview

This application is a Node.js/Express server backed by MongoDB. It demonstrates:
	• A RESTful CRUD API for at least three different collections.
	• Proper data modeling, indexing, and validation in MongoDB.
	• Creation, retrieval, updating, and deletion of documents via Express routes.
	• Code organization best practices, environment variable usage, and git version control.

Purpose: To showcase the ability to design, implement, and maintain a MongoDB-based server application that meets the SBA-319 assessment requirements.


Routes:

GET http://localhost:3999/customers/active
Return arr of all customer documents where active = true
