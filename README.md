# Agency Chatbot

Minimal FastAPI backend for an agency chatbot project.

## Install

git clone https://github.com/mehdimk022-design/agency-chatbot.git
cd agency-chatbot
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

## Environment variables

Create a local `.env` file with:

APP_VERSION=0.1.0
OPENAI_API_KEY=your_openai_api_key_here

## Run locally

uvicorn main:app --reload

## Deploy on Render

Build command:

pip install -r requirements.txt

Start command:

uvicorn main:app --host 0.0.0.0 --port $PORT

Environment variables needed on Render:
- APP_VERSION
- OPENAI_API_KEY

## Example requests

### GET /health

curl http://127.0.0.1:8000/health

### GET /version

curl http://127.0.0.1:8000/version

### POST /chat

curl -X POST http://127.0.0.1:8000/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"salam"}'
