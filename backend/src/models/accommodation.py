from sqlalchemy import Column, Integer, String, Float
from src.config.db import Base

class Accommodation(Base):
    __tablename__ = 'accommodations'

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)
    imagem = Column(String(200), nullable=False)
    preco_noite = Column(Float, nullable=False)
    localizacao = Column(String(100), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'imagem': self.imagem,
            'preco_noite': self.preco_noite,
            'localizacao': self.localizacao
        }
