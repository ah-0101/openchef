from .db import db


class Food_Type(db.Model):
    __tablename__ = 'food_types'
    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(1000))
    # created_at = db.Column(db.DateTime, default=db.datetime.utcnow)
    # updated_at = db.Column(db.DateTime, default=db.datetime.utcnow, onupdate=db.datetime.utcnow) # noqa
    name = db.Column(db.String(25), unique=True)

    # We are not including back_populates("food_type")
    chef = db.relationship("Chef")
