from app.models import db, Reservation
# Adds a demo user, you can add other users here if you want


def seed_reservations():
    reserv1 = Reservation(user_id=1, chef_id=2, duration=2, event_date="2021/04/13",event_time="8:00 pm")
    reserv2 = Reservation(user_id=2, chef_id=3, duration=2,
                          event_date="2021/04/15", event_time="10:00 pm")
    reserv3 = Reservation(user_id=1, chef_id=3, duration=3,
                          event_date="2021/04/30", event_time="7:00 pm")
    reserv4 = Reservation(user_id=1, chef_id=4, duration=2, event_date="2021/05/01",event_time="7:00 pm")
    reserv5 = Reservation(user_id=1, chef_id=5, duration=2, event_date="2021/05/13",event_time="9:00 pm")
    reserv6 = Reservation(user_id=1, chef_id=3, duration=2, event_date="2021/05/21",event_time="8:00 pm")
    reserv7 = Reservation(
        user_id=1, chef_id=4, duration=1, event_date="2021/06/13", event_time="7:00 pm")
    db.session.add(reserv1)
    db.session.add(reserv2)
    db.session.add(reserv3)
    db.session.add(reserv4)
    db.session.add(reserv5)
    db.session.add(reserv6)
    db.session.add(reserv7)
    db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_reservations():
    db.session.execute('TRUNCATE reservations;')
    db.session.commit()
