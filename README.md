# docker-compose-php

docker-compose setup to run php5.6 or php7 with php-fpm via nginx and mysql. Connecting from php on a mysql database still fails. Not sure why.

# Purpose

Create the ultimate development environment 

# Install

Install docker and [docker-compose](https://docs.docker.com/compose/install/)

# Run

		$ git clone https://github.com/devigner/docker-compose-php.git
		$ cd docker-compose-php
		$ docker-compose build
		$ docker-compose up -d

# PHP

By default the setup creates a php5.6 environment, see docker-compose-php-7.yml how to use php7 (pre-release)

# Test

Open url http://localhost:8000 and you will see a phpinfo page
