from contextlib import asynccontextmanager
from fastapi import FastAPI
from app.database.connection import check_connection


@asynccontextmanager
async def lifespan(app: FastAPI):
    check_connection()
    yield


app = FastAPI(lifespan=lifespan)


@app.get("/")
def home():
    return {"message": "Architecture Backend Running"}