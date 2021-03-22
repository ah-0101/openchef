from .db import db


class Chef(db.Model):
    __tablename__ = "chefs"
    id = db.Column(db.Integer, primary_key=True)
    food_type_id = db.Column(db.Integer, db.ForeignKey("food_types.id"), nullable=False)  # noqa
    price = db.Column(db.Integer, nullable=False)
    profile_image = db.Column(db.String(1000))
    # created_at = db.Column(db.DateTime, default=db.datetime.utcnow)
    # updated_at = db.Column(db.DateTime, default=db.datetime.utcnow, onupdate=db.datetime.utcnow) # noqa

    # We are not including back_populates("chef")
    food_type = db.relationship("Food_Type")
