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

    def to_dict(self):
        return {
            "id": self.id,
            "image": self.image,
            "name": self.name,
        }

    def to_dict_search(self):
        return {
            'id': self.id,
            'name': self.name,
            # 'image': self.image,
            # 'chef_id': [chef.to_dict() for chef in self.chef],
            # [reservation.to_dict() for reservation in self.user_reservations]
        }
