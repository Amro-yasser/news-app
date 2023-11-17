runapp:
	cd news_app_backend && sudo docker compose up -d
	cd news_app_front && ng serve
deployprod:
	sudo git reset --hard 
	sudo git checkout main 
	sudo git pull origin main
	sudo docker-compose -f docker-compose-prod.yml build 
	sudo docker-compose -f docker-compose-prod.yml up -d 
	sudo docker-compose -f docker-compose-prod.yml exec newsapp-prod-api python manage.py collectstatic --clear --no-input && sudo docker-compose -f docker-compose-prod.yml exec newsapp-prod-api python manage.py showmigrations 
	sudo docker-compose -f docker-compose-prod.yml exec newsapp-prod-api python manage.py migrate;		