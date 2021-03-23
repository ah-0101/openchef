from werkzeug.security import generate_password_hash
from app.models import db, Food_Type

def seed_food_types():

  italian = Food_Type(name="Italian")

  db.session.add(italian)
  db.session.commit()

def undo_food_types():
  db.session.execute('TRUNCATE food_types;')
  db.session.commit()