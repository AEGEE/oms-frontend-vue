DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if ! [[ -f "$DIR/.env" ]]; then
    echo -e "Copying .env file from .env.example"
    cp $DIR/.env.example $DIR/.env
fi


source ./.env

if [[ $SERVER == "DEV" ]]
then
  echo "Launching DEVELOPMENT configuration"
  node ./server.js & node_modules/webpack/bin/webpack.js --watch && node
else
  echo "Launching PRODUCTION configuration"
  node ./server.js
fi
