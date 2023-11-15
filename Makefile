runapp:
	sudo docker compose up 
deployprod:
	sudo git reset --hard 
	sudo git checkout main 
	sudo git pull origin main
	sudo docker-compose -f docker-compose-prod.yml build 
	sudo docker-compose -f docker-compose-prod.yml up -d 
	sudo docker-compose -f docker-compose-prod.yml exec newsapp-prod-api python manage.py collectstatic --clear --no-input && sudo docker-compose -f docker-compose-prod.yml exec newsapp-prod-api python manage.py showmigrations 
	sudo docker-compose -f docker-compose-prod.yml exec newsapp-prod-api python manage.py migrate;		