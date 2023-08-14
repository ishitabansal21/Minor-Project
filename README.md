# Minor-Project

Database Connection
Import connect.js
Invoke in start()
Setup .env in the root
Add MONGO_URI with correct value

Routers    
auth.js
profile.js
feed.js

User Model
Email Validation Regex

/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

Register User
Validate - name, email, password - with Mongoose
Hash Password (with bcryptjs)
Save User
Generate Token
Send Response with Token.

