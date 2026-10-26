from flask import Flask, render_template

Porfolio = Flask(__name__)


@Porfolio.route("/")
def home():
    return render_template("index.html")


if __name__ == "__main__":
    Porfolio.run(debug=True)