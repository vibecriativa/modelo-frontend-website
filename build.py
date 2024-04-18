from typing import Dict
from fastapi import FastAPI, Response
from pydantic import BaseModel
from nacl.public import PrivateKey, Box
import os

#install dependencies (execute in terminal)

#pip install fastapi
#pip install uvicorn
#pip install pynacl

def BuildPags():
    # print('buildando o projeto')
    # os.system("npm run build &")
    # print('build feito com sucesso')
    os.system("./build.sh")
app = FastAPI()

@app.post("/build/astro/website/")
async def build_astro_website():
    BuildPags()
    response = Response(status_code=200)
    return response

