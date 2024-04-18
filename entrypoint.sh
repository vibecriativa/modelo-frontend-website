#!/bin/sh

#loop container to keep it running
# echo "keep container running" && tail -f /dev/null

#install dependencies (execute in terminal)

#pip install fastapi
#pip install uvicorn
#pip install pynacl

echo "Installing dependencies"
python3 -m venv /home/node/app/venv
/home/node/app/venv/bin/pip install fastapi uvicorn pynacl
npm install --legacy-peer-deps
sleep 10
echo "Building"
./build.sh
# echo "Copying files"
# cp -r dist/* html/dist/
echo "Starting server"
#npm run dev -- --host=0.0.0.0
#conteiner will keep running
# echo "keep container running" && tail -f /dev/null
node server.mjs & /home/node/app/venv/bin/uvicorn build:app --host 0.0.0.0 --reload --port 3002

