Overview

This application is a Node.js/Express server backed by MongoDB. It demonstrates:
	• A RESTful CRUD API for at least three different collections.
	• Proper data modeling, indexing, and validation in MongoDB.
	• Creation, retrieval, updating, and deletion of documents via Express routes.
	• Code organization best practices, environment variable usage, and git version control.

Purpose: To showcase the ability to design, implement, and maintain a MongoDB-based server application that meets the SBA-319 assessment requirements.


Routes:

GET http://localhost:3999/customers/active
Return  all customer documents where active = true
GET http://localhost:3999/customers
Return  all customers
POST http://localhost:3999/customers/
add new customer in req body
Patch http://localhost:3999/customers/:id
Update customer email, match on id, 
DELETE  http://localhost:3999/transactions/:id
delete transaction on id
