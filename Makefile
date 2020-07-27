build_server:
	@echo "Building server."
	docker-compose build server

build_database:
	@echo "Building database."
	docker-compose build database

start_server:
	@echo "Starting server."
	docker-compose up server

start_database:
	@echo "Starting database."
	docker-compose up database

stop_server:
	@echo "Stop server."
	docker-compose stop server

stop_database:
	@echo "Stop database."
	docker-compose stop database

start_service:
	@echo "Start service."
	docker-compose up

stop_service:
	@echo "Stop service."
	docker-compose stop