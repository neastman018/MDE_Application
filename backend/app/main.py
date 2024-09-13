from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

if __name__ == "__main__":
    uvicorn.run("app.api:app", host="0.0.0.0", port=4000, reload=True)

app = FastAPI()

# Allowable origins to recieve data from
origins = [
    "http://localhost",
    "http://localhost:3000",
]

# Add the CORS middleware and adds our origins to the acceptable list
app.add_middleware(
     CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
    )

@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your todo list."}