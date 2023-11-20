setup:
	sudo apt update
	sudo apt install -y nodejs
	sudo npm install -g @angular/cli
	sudo npm install -g http-server
	cd news_app_front && sudo npm install

rundev:
	cd news_app_backend && sudo docker compose up -d
	cd news_app_front && ng serve 

runapp:
	cd news_app_backend && sudo docker compose up  -d && sudo docker compose exec newsapp-dev-api python manage.py migrate && cd ../news_app_front && ng build --localize && cd dist/news_app_front && http-server -p 4000 -o en-US

