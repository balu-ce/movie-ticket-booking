# Database

1. MongoDb - Our DB
2. MySql - Theatre Database(owned by client)
3. Redis - To maintain payment Cache

Mongo DB(no auth)
-----------------------------------------------------------------------
1. Import Movies theatre.mongo_collection.json into mongodb

MySQL(Auth - Client Credentials)
---------------------------------------------------------------------
1. SET innodb_lock_wait_timeout = 5 (to set transaction waiting state to 5 sec)
2. Import the mysql client_db.sql

Redis(no auth)
----------------------------------------------------------------------
1. Install redis

Web Service
----------------------------------------------------------------------
1. npm  install
2. To Change MySQL user and pass edit /src/datasources/my-sql.datasource.ts
3. npm start

Testing Service
------------------------------------------------------------------------
1. Import Postman Collection superops.postman_collection.json into post man
2. Test the following services

    - SignUp
    - Find Theatre(No Auth)
    - Login - Retrive Token
    - Select Show (Auth) - Bearer Token
    - Select Seat (Auth) - Bearer Token
    - Seat Booking(Auth) - Bearer Token
    - Payment and Dispatch(Auth) - Bearer Token

Load Balacing
--------------------------------------------------------------------------
1. Not Implemented load balancing , we can use kubernetes or ECS services in AWS
