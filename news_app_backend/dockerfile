FROM python:3.10.1
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
RUN pip install --upgrade pip
ADD requirements.txt /code/
RUN pip install -r requirements.txt --default-timeout=8000
ADD . /code/
RUN apt-get update
