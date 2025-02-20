from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["shortspro"]
users = db["users"]
favorites = db["favorites"]
