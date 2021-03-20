from .db import db


class Reservation(db.Model):
    __tablename__ = "reservations"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    chef_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    duration = db.Column(db.Integer)
    event_date = db.Column(db.Date)
    event_time = db.Column(db.DateTime)
    # created_at = db.Column(db.DateTime, default=db.datetime.utcnow)
    # updated_at = db.Column(db.DateTime, default=db.datetime.utcnow, onupdate=db.datetime.utcnow)
