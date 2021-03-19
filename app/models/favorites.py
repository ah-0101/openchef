from .db import db

class Favorite(db.Model):
    __tablename__ = 'favorites'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey="users.id")
    chef_id = db.Column(db.Integer, db.ForeignKey="users.id")
