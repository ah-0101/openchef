from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Reservation(db.Model):
    __tablename__="reservations"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    chef_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    string = db.Column(db.String(2000))

class Chef(db.Model):
    __tablename__="chefs"
    id = db.Column(db.Integer, primary_key=True)
    bio = db.Column(db.String(2000))

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    chef_id = db.Column(db.Integer, db.ForeignKey('chefs.id'))
    user_reservations = db.relationship(
        "User", 
        secondary="reservations",
        primaryjoin=(Reservation.user_id == id),
        secondaryjoin=(Reservation.chef_id == id),
        backref=db.backref("reservations", lazy="dynamic"),
        lazy="dynamic"
    )
    chef_reservations = db.relationship(
        "User", 
        secondary="reservations",
        primaryjoin=(Reservation.chef_id == id),
        secondaryjoin=(Reservation.user_id == id),
        # backref=db.backref("reservations", lazy="dynamic"),
        # lazy="dynamic"
    )
    first_name = db.Column(db.String(2000))


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    city = db.Column(db.String(25), nullable=False)
    email = db.Column(db.String(75), nullable=False, unique=True)
    hashed_password = db.Column(db.String(75))
    chef_id = db.Column(db.Integer, unique=True)
class Chef(db.Model):
    __tablename__ = "chefs"
    id = db.Column(db.Integer, primary_key=True)
    food_type_id = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    profile_image = db.Column(db.String(1000))
class Food_Type(db.Model):
    __tablename__ = 'food_types'
    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(1000))
    name = db.Column(db.String(25), unique=True)
class Favorite(db.Model):
    __tablename__ = 'favorites'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    chef_id = db.Column(db.Integer)
    user_fav = db.relationship(db.Integer, db.ForeignKey('user.id'))
    chef_fav = db.relationship(db.Integer, db.ForeignKey('user.id'))
class Review(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    chef_id = db.Column(db.Integer)
    rating = db.Column(db.Integer)
    comment = db.Column(db.Text(250))
class Reservation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    chef_id = db.Column(db.Integer)
    duration = db.Column(db.Integer)
    # example:
    #   menu = db.relationship("Menu", back_populates="items")  # one to many
    # type = db.relationship("MenuItemType")  # many-to-one