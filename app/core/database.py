import os
from dotenv import load_dotenv
from pymongo import MongoClient
from pymongo.server_api import ServerApi

load_dotenv()

client = MongoClient(os.getenv("MONGO_URI"), server_api=ServerApi("1"))

try:
    client.admin.command("ping")
    print("✅ MongoDB Database Connected Successfully!")
except Exception as e:
    print("❌ Database connection failed:", e)

db = client[os.getenv("DB_NAME")]