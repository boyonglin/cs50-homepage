from flask import Flask, render_template

app = Flask(__name__)

TIMES = [
    "09:00",
    "14:00"
]

@app.route("/")
def index():
    return render_template("index.html", times=TIMES)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/blog")
def blog():
    return render_template("blog.html")

@app.route("/services")
def services():
    return render_template("services.html")

@app.route("/reservation")
def reservation():
    return render_template("reservation.html")

if __name__ == '__main__':
    app.debug = True
    app.run()