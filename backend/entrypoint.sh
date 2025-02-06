#!/bin/sh

echo "Aguardando o banco de dados estar pronto..."
while ! nc -z db 5432; do
  sleep 1
done

echo "Banco de dados pronto, inicializando API..."
python src/main.py
