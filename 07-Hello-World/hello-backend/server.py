#!/usr/bin/env python
import string
from textblob import TextBlob
from flask import Flask, jsonify, request

DEBUG = False
exclude_char = set(string.punctuation)

app = Flask(__name__, static_url_path = "")

def clean_data(str):
    txt = str.lower()
    txt = ''.join(ch for ch in txt if ch not in exclude_char)
    return txt.replace('  ',' ').strip()

@app.route('/api/ping', methods = ['GET'])
def ping():
    return jsonify( { 'status': 'UP','message': 'Hi there, this is the sentiment analysis server' } ), 200

@app.route('/api/textblob', methods = ['POST'])
def get_sentiment_textblob():
    data = clean_data(request.data.decode("utf-8"))
    polarity, subjectivity = TextBlob(data).sentiment
    classification = 'neu'
    if subjectivity > 0:
        if polarity > 0:
            classification = 'pos'
        if polarity < 0:
            classification = 'neg'
    return jsonify( { 'classification': classification,'polarity': polarity, 'subjectivity': subjectivity } ), 200        

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=DEBUG)