#!/bin/sh

echo "Installing dependencies"
npm install
sleep 10
echo "Building"
npm run build
echo "Copying files"
cp -r dist/* html/dist/
echo "Starting server"
npm run dev -- --host=0.0.0.0

