from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_mundo():
    return 'hello, mundo, Kéfir'

if __name__ == '__main__':
    app.run(debug=True)
