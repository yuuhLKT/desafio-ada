from flask import Flask, jsonify, request
from flask_cors import CORS
from src.models.accommodation import Accommodation
from src.config.db import SessionLocal, engine, Base
from unidecode import unidecode
import json
import time

app = Flask(__name__)
CORS(app)

def init_db():
    print("Initializing database...")
    time.sleep(3)  
    try:
        Base.metadata.create_all(bind=engine)
        print("Database tables created successfully")
        load_initial_data()
    except Exception as e:
        print(f"Error initializing database: {e}")

def load_initial_data():
    db = SessionLocal()
    try:
        # Clear existing data
        db.query(Accommodation).delete()
        
        with open('src/data/initial_data.json', 'r', encoding='utf-8') as file:
            data = json.load(file)
            for acc in data['accommodations']:
                db_acc = Accommodation(**acc)
                db.add(db_acc)
        db.commit()
        print("Initial data loaded successfully")
    except Exception as e:
        print(f"Error loading initial data: {e}")
        db.rollback()
    finally:
        db.close()

def get_db():
    db = SessionLocal()
    try:
        return db
    finally:
        db.close()

@app.route('/acomodacoes', methods=['GET'])
def get_accommodations():
    db = get_db()
    try:
        cidade = request.args.get('cidade')
        query = db.query(Accommodation)
        
        if cidade:
            cidade = cidade.replace('-', ' ').strip()
            accommodations = query.all()
            filtered_accommodations = [
                acc for acc in accommodations 
                if unidecode(cidade.lower()) in unidecode(acc.localizacao.lower())
            ]
            return jsonify([acc.to_dict() for acc in filtered_accommodations])
        
        accommodations = query.all()
        return jsonify([acc.to_dict() for acc in accommodations])
    except Exception as e:
        print(f"Error in get_accommodations: {e}")
        return jsonify({'error': str(e)}), 500
    finally:
        db.close()

@app.route('/acomodacoes/<int:id>', methods=['GET'])
def get_accommodation(id):
    db = get_db()
    try:
        accommodation = db.query(Accommodation).filter(Accommodation.id == id).first()
        if not accommodation:
            return jsonify({'error': 'Acomodação não encontrada'}), 404
        return jsonify(accommodation.to_dict())
    except Exception as e:
        print(f"Error in get_accommodation: {e}")
        return jsonify({'error': str(e)}), 500
    finally:
        db.close()

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Recurso não encontrado'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Erro interno do servidor'}), 500

if __name__ == '__main__':
    init_db()
    app.run(debug=True, host='0.0.0.0')