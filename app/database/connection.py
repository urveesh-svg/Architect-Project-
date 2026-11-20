from pymongo import MongoClient
from pymongo.server_api import ServerApi
from app.core.config import MONGO_URI, DB_NAME

client = MongoClient(MONGO_URI, server_api=ServerApi("1"))
db = client[DB_NAME]


def check_connection():
    try:
        client.admin.command("ping")
        print("✅ MongoDB Database Connected Successfully!")
    except Exception as e:
        print("❌ Database connection failed:", e)