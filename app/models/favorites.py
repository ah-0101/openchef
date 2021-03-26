from .db import db


class Favorite(db.Model):
    __tablename__ = 'favorites'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    chef_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    # created_at = db.Column(db.DateTime, default=db.datetime.utcnow)
    # updated_at = db.Column(db.DateTime, default=db.datetime.utcnow, onupdate=db.datetime.utcnow) # noqa

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "chef_id": self.chef_id,
        }
