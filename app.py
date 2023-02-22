from flask import Flask, render_template

app = Flask(__name__)

TIMES = [
    "09:00",
    "14:00"
]

@app.route("/")
def index():
    return render_template("index.html", times=TIMES)

if __name__ == '__main__':
    app.debug = True
    app.run()