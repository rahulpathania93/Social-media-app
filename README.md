Project Documentation: Social Media Application with User Authentication, Posts, and Comments
This project is a Social Media Application where users can:

Register (sign up) with their details.
Login using email and password.
Create, view, and comment on posts.
Reply to comments in a Facebook-style comment section.
Key Features:
User Registration (Sign-Up): Users can sign up with their name, email, phone number, and password.
User Login: After registration, users can log in using their email and password. They will receive an access token upon successful login.
Create Posts: Users can create posts with a title, description, and an optional picture.
View Posts: Users can view posts from all users or posts from a particular user.
Comment on Posts: Users can add comments to any post.
Reply to Comments: Users can reply to comments, creating a conversation under each post.

Technologies Used:
Node.js: Backend runtime environment.
Express: Web framework for building APIs.
MongoDB: NoSQL database to store user, post, and comment data.
Mongoose: MongoDB ODM (Object Data Modeling) library for interacting with MongoDB.
bcryptjs: For hashing passwords.
jsonwebtoken (JWT): For generating and verifying access tokens.
dotenv: For managing environment variables like DB URI and JWT secret.


/social-media-
  ├── /controllers
  │    ├── userController.js
  │    ├── postController.js
  │    └── commentController.js
  ├── /models
  │    ├── userModel.js
  │    ├── postModel.js
  │    └── commentModel.js
  ├── /routes
  │    ├── userRoutes.js
  │    ├── postRoutes.js
  │    └── commentRoutes.js
  ├── /services
  │    ├── userService.js
  │    ├── postService.js
  │    └── commentService.js
  ├── app.js
  ├── .env
  └── package.json
