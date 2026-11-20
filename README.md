# Architecture Backend

FastAPI backend starter structure organized by feature/module.

## Setup

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

API docs: http://127.0.0.1:8000/docs

Each feature has its own `router.py`, `service.py`, `model.py`, and `schema.py`.
Keep shared configuration in `app/core/` and coordinate changes to shared files.
