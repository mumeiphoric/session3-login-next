import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Session 3 Backend API",
      version: "1.0.0",
      description: "Simple API using dummy data in Next.js",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    paths: {
      "/api/users": {
        get: {
          summary: "Get all users",
          description: "Retrieve a list of all users",
          responses: {
            200: {
              description: "List of users",
            },
          },
        },
        post: {
          summary: "Create new user",
          description: "Add a new user to the list",
          responses: {
            201: {
              description: "User created successfully",
            },
          },
        },
        put: {
          summary: "Update user",
          description: "Update an existing user by ID",
          responses: {
            200: {
              description: "User updated successfully",
            },
          },
        },
        delete: {
          summary: "Delete user",
          description: "Remove a user by ID",
          responses: {
            200: {
              description: "User deleted successfully",
            },
          },
        },
      },
    },
  },
  apis: [],
};

export const swaggerSpec = swaggerJSDoc(options);