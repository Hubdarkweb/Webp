import requests
from flask import Flask, request

TOKEN = "7702864201:AAGkUv-a9Kmthrk5bEbMZeYJg7RdfHjoNGY"
WEB_APP_URL = "https://green-dew-04ca.topplug.workers.dev/"

app = Flask(__name__)

@app.route(f"/{TOKEN}", methods=["POST"])
def handle_update():
    update = request.json
    if "message" in update:
        chat_id = update["message"]["chat"]["id"]
        send_web_app_button(chat_id)
    return "ok"

def send_web_app_button(chat_id):
    url = f"https://api.telegram.org/bot{TOKEN}/sendMessage"
    data = {
        "chat_id": chat_id,
        "text": "Click the button below to open the web app.",
        "reply_markup": {
            "inline_keyboard": [[
                {"text": "Open Web App", "web_app": {"url": WEB_APP_URL}}
            ]]
        }
    }
    requests.post(url, json=data)

if __name__ == "__main__":
    app.run(port=5000)
