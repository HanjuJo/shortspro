from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from scripts.youtube_scraper import get_shorts_trends

app = FastAPI()

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Welcome to ShortsPro API"}


@app.get("/shorts_trends")
def shorts_trends(keyword: str):
    return get_shorts_trends(keyword)
