#!/bin/sh

echo "build pages"
npm run build && echo "copy pages" && cp -r dist html/
