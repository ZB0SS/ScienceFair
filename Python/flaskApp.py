from flask import Flask, jsonify
from main import getData
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
	return jsonify(getData())

app.run(port=5000)