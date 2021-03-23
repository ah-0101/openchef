from app.models import db, Reservation
# Adds a demo user, you can add other users here if you want


def seed_reservations():
    reserv1 = Reservation(user_id=1, chef_id=1, duration=2)
    db.session.add(reserv1)
    db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def seed_reservations():
    db.session.execute('TRUNCATE reservations;')
    db.session.commit()
