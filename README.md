# docker-composer-php

docker-compose setup to run php5.6 or php7 with php-fpm via nginx and mysql. Connecting from php on a mysql database still fails. Not sure why.

# Purpose

Create the ultimate development environment 

# Install

Install docker and docker-compose [https://docs.docker.com/compose/install/]

# Run

Clone the project and cd to the root projec and run:

		$ docker-compose build
		$ docker-compose up -d

# Test

Open url http://localhost:8000 and you will see a phpinfo page

# Todo

- Fix database connection issue.
- Run Symfony app (my purpose)
- Integrate dns solution (eg dnsmasq)
- more ideas are welcome!

