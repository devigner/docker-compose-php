# docker-compose-php

docker-compose setup to run latest PHP 7 under Nginx with every container outputting it's logging
to the docker daemon.

# Purpose

Create the ultimate development environment

# Install

Install docker and [docker-compose](https://docs.docker.com/compose/install/)

# Run
	
	$ git clone https://github.com/devigner/docker-compose-php.git
	$ cd docker-compose-php
	$ docker-compose build
	$ docker-compose up -d

# Test

Open url http://localhost and you will see a phpinfo page

# http/2

Copy .env.dist to .env and fill in the obvious information 

Open url https://example.com and you will see a phpinfo page running in http/2
