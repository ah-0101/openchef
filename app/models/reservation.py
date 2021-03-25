from .db import db
# from datetime import datetime, timedelta

class Reservation(db.Model):
    __tablename__ = "reservations"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    chef_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    duration = db.Column(db.Integer,nullable=False)
    event_date = db.Column(db.String(),nullable=False)
    event_time = db.Column(db.String(),nullable=False)
    # created_at = db.Column(db.DateTime, default=db.datetime.utcnow)
    # updated_at = db.Column(db.DateTime, default=db.datetime.utcnow, onupdate=db.datetime.utcnow) # noqa

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "chef_id": self.chef_id,
            "duration": self.duration,
            "event_date": self.event_date,
            "event_time": self.event_time,
        }
