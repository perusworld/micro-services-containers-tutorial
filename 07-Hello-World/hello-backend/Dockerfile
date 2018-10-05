FROM python:alpine
EXPOSE 8080
COPY requirements.txt server.py /app/
WORKDIR /app
RUN pip install --no-cache-dir -r requirements.txt
RUN python -m textblob.download_corpora
ENTRYPOINT ["python"]
CMD ["server.py"]