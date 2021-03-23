from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .reservation import Reservation
from .favorites import Favorite
from .chef import Chef
from .reviews import Review

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    city = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(75), nullable=False, unique=True)
    chef_id = db.Column(db.Integer, db.ForeignKey("chefs.id"))
    hashed_password = db.Column(db.String, nullable=False)
    # created_at = db.Column(db.DateTime, default=datetime.utcnow)
    # updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    chef = db.relationship("Chef")

    user_reservations = db.relationship(
        "User",
        secondary="reservations",
        primaryjoin=(Reservation.user_id == id),
        secondaryjoin=(Reservation.chef_id == id),
        # backref=db.backref("reservations", lazy="dynamic"),
        # lazy="dynamic"
    )
    chef_reservations = db.relationship(
        "User",
        secondary="reservations",
        primaryjoin=(Reservation.chef_id == id),
        secondaryjoin=(Reservation.user_id == id),
        # backref=db.backref("reservations", lazy="dynamic"),
        # lazy="dynamic"
    )
    favorites = db.relationship(
        "User",
        secondary="favorites",
        primaryjoin=(Favorite.user_id == id),
        secondaryjoin=(Favorite.chef_id == id)
    )
    user_reviews = db.relationship(
        "User",
        secondary="reviews",
        primaryjoin=(Review.user_id == id),
        secondaryjoin=(Review.chef_id == id)
    )
    chef_reviews = db.relationship(
        "User",
        secondary="reviews",
        primaryjoin=(Review.chef_id == id),
        secondaryjoin=(Review.user_id == id)
    )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        print(password)
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "chef_id": self.chef_id,
            "email": self.email
        }
