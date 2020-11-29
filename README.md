This repository is a full stack coding test completed for an interview with Launchcode.

It contains both front and back end projects (the 'web' and 'server' folders inside of /packages, respectively). Yarn was used to bootstrap the repository, and the dev scripts given in the /package.json will help you run it in your local environment. 'yarn start' will concurrently launch both the front and back end projects.

PostgreSQL
The SQL platform used for this is postgreSQL. The local settings that muct be configured in your postgresql server are given in /packages/server/.env.local although these settings have been hardcoded for the purposes of this exercise. Once you have a postgresql environment configured with the appropriate user and password, the script to create the database schema with some sample data is given in /sql-init.sql 