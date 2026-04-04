from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

from config import settings


@asynccontextmanager
async def lifespan(app: FastAPI):
    print(
        f"Config loaded: app_version={settings.app_version}, "
        f"openai_api_key_present={bool(settings.openai_api_key)}"
    )
    yield


app = FastAPI(lifespan=lifespan)


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str
    status: str


@app.get("/health")
def health():
    return {"status": "ok"}


@app.get("/version")
def version():
    return {"version": settings.app_version}


@app.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    if not request.message.strip():
        raise HTTPException(status_code=400, detail="message must not be empty")

    return ChatResponse(
        reply="chat stub not implemented yet",
        status="ok",
    )
