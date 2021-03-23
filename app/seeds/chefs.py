from werkzeug.security import generate_password_hash
from app.models import db, Chef

def seed_chefs():

  demo = Chef(food_type_id=2, price=60, bio="I have been a chef for 20 years and am the best",
  profile_image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Feducationcareerarticles.com%2Fwp-content%2Fuploads%2F2014%2F07%2FChef9.jpg&f=1&nofb=1")


  db.session.add(demo)
  
  db.session.commit()

def undo_chefs():
  db.session.execute('TRUNCATE chefs;')
  db.session.commit()