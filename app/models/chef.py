from .db import db


class Chef(db.Model):
    __tablename__ = "chefs"
    id = db.Column(db.Integer, primary_key=True)
    food_type_id = db.Column(db.Integer, nullable=False, db.ForeignKey="food_types.id")  # noqa
    price = db.Column(db.Integer, nullable=False)
    profile_image = db.Column(db.String(1000))

    # We are not including back_populates("chef")
    food_type = db.relationship("Food_Type")
