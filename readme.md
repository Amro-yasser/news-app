# News App

This is a simple news application built with Angular for the frontend and Django for the backend. The application is containerized using Docker Compose for easy deployment.

## Prerequisites

Make sure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js and npm](https://nodejs.org/)
- [Angular CLI](https://cli.angular.io/)
- [Http-Server](https://www.npmjs.com/package/http-server)

#### it is better to install prerequisites manually in case of dependencies missmatch

## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone https://gitlab.com/Amro-yasser/news_app.git
   cd news-app
    ```
2. Launch the application using this command:
    
   ```bash
   make runapp
   ```

## Performance Optimizations

To enhance the application's performance, several optimizations have been implemented:

### Indexing

- **Database Indexes**: Indexes have been strategically applied to the `Search` table to accelerate data retrieval operations. This ensures faster search queries and improves overall database performance.

- **Gin Indexing**: The application leverages PostgreSQL's Gin (Generalized Inverted Index) indexing for certain data columns. Gin indexes are particularly useful for complex data types, such as text search and array types. This implementation speeds up search queries and enhances the overall search experience.


- **BtreeGin Extension**: Additionally, the BtreeGinExtension has been employed to extend the capabilities of the GIN index. This extension provides enhanced performance for certain types of queries and further refines the indexing strategy.


### Table Partitions

- **Partitioning**: Table partitioning has been employed to manage and organize large datasets more efficiently. This optimization enhances query performance, especially for historical data or frequently accessed information.

### Saved Searches

- **Search History**: The application saves user search queries to optimize future searches. By storing and retrieving past searches, the app reduces redundant requests, resulting in quicker response times and a smoother user experience.

