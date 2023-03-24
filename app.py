from flask import Flask, render_template
from liveserver import LiveServer

app = Flask(__name__)

ls = LiveServer(app)

TIMES = [
    "09:00",
    "14:00"
]

@app.route("/")
def index():
    return ls.render_template("index.html", times=TIMES)

@app.route("/about")
def about():
    return ls.render_template("about.html")

@app.route("/blog")
def blog():
    return ls.render_template("blog.html")

@app.route("/services")
def services():
    return ls.render_template("services.html")

@app.route("/schedule")
def schedule():
    return ls.render_template("schedule.html")

if __name__ == '__main__':
    ls.app.run(debug = True)