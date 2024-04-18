import hmac
import hashlib
import os
import subprocess


#instalar o flask
try:
    # Executar o comando para instalar o flask
    subprocess.check_call(["pip", "install", "Flask"])
    print("O flask foi instalado com sucesso.")
except subprocess.CalledProcessError as e:
    print(f"Erro ao instalar o Flask: {e}")
except Exception as e:
    print(f"Ocorreu um erro inesperado: {e}")

#instalar o python-dotenv
try:
    # Executar o comando para instalar o python-dotenv
    subprocess.check_call(["pip", "install", "python-dotenv"])
    print("O flask foi instalado com sucesso.")
except subprocess.CalledProcessError as e:
    print(f"Erro ao instalar o python-dotenv: {e}")
except Exception as e:
    print(f"Ocorreu um erro inesperado: {e}")

from dotenv import load_dotenv
from flask import Flask, request, abort

#carregar variaveis de ambiente
load_dotenv()
PORT = os.getenv("DEPLOY_PORT")


#função para fazer o git pull e buildar o projeto
def BuildPags():
    os.system("git pull origin main && docker compose exec app ./build.sh")
    print('build feito com sucesso')

app = Flask(__name__)

secret_key = os.getenv("SECRET_KEY_DEPLOY")  # Substitua pela sua chave secreta do webhook

@app.route('/webhook', methods=['POST'])
def webhook():
    signature = request.headers.get('X-Hub-Signature')

    if not signature:
        abort(403)

    sha_name, signature = signature.split('=')
    if sha_name != 'sha256':
        abort(501)

    secret = bytes(secret_key, 'UTF-8')
    mac = hmac.new(secret, msg=request.data, digestmod=hashlib.sha256)
    if not hmac.compare_digest(mac.hexdigest(), signature):
        abort(403)

    # Se chegou até aqui, a requisição é autêntica

    # Faça o processamento adicional conforme necessário
    print("Webhook do Bitbucket recebido com sucesso!")
    BuildPags()
    return '', 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=PORT)


