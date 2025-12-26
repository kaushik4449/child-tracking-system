from flask import Flask, render_template, request
import sqlite3
from datetime import datetime

app = Flask(__name__)

# ---------- DATABASE SETUP ----------
def get_db():
    conn = sqlite3.connect("tracking.db")
    return conn

def create_tables():
    conn = get_db()
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS tracking (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id TEXT,
        location TEXT,
        time TEXT
    )
    """)

    conn.commit()
    conn.close()

create_tables()

# ---------- RFID SCAN PAGE ----------
@app.route("/scan", methods=["GET", "POST"])
def scan():
    message = ""
    if request.method == "POST":
        student_id = request.form["student_id"]
        location = request.form["location"]
        time = datetime.now().strftime("%d-%m-%Y %H:%M:%S")

        conn = get_db()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO tracking (student_id, location, time) VALUES (?, ?, ?)",
            (student_id, location, time)
        )
        conn.commit()
        conn.close()

        message = "Tracking data recorded successfully!"

    return render_template("scan.html", message=message)

# ---------- PARENT TRACKING PAGE ----------
@app.route("/parent", methods=["GET", "POST"])
def parent():
    records = []
    if request.method == "POST":
        student_id = request.form["student_id"]

        conn = get_db()
        cursor = conn.cursor()
        cursor.execute(
            "SELECT location, time FROM tracking WHERE student_id = ? ORDER BY id DESC",
            (student_id,)
        )
        records = cursor.fetchall()
        conn.close()

    return render_template("parent.html", records=records)

# ---------- RUN SERVER ----------
if __name__ == "__main__":
    app.run(debug=True)
