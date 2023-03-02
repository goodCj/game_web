rm -rf game_web

git clone https://github.com/goodCj/game_web.git

rm -rf /usr/share/nginx/html/*

cp -r ./game_web/dist/* /usr/share/nginx/html/

