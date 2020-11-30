This repository is a full stack coding test completed for an interview with Launchcode.

It contains both front and back end projects (the 'web' and 'server' folders inside of /packages, respectively). Yarn was used to bootstrap the repository, and the dev scripts given in the /package.json will help you run it in your local environment. 'yarn start' from the root directory will concurrently launch both the front and back end projects.

PostgreSQL
The SQL platform used for this is postgreSQL. The local settings that must be configured in your postgresql server are given in /packages/server/.env.local. These settings have been hardcoded for the purposes of this exercise, so environment variables are not used for this demonstration. Once you have a postgresql environment configured with the appropriate user and password ('postgres' and '1234' respectively), the script to create the database schema with some sample data is given in /sql-init.sql
