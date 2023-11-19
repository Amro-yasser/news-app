setup:
	sudo apt update
	sudo apt install -y nodejs
	sudo npm install -g @angular/cli
	sudo npm install -g http-server

build:
	cd news_app_front && ng build --localize 


runapp:
    @build
	cd news_app_backend && sudo docker compose up -d
	cd news_app_front/dist/news_app_front http-server -p 4000 -o en-us

