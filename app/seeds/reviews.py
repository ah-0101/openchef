from app.models import db, Review
# Adds a demo user, you can add other users here if you want


def seed_reviews():
    review1 = Review(user_id=1, chef_id=1, rating=5,
                     comment="Super great chef!")
    db.session.add(review1)
    db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def seed_reviews():
    db.session.execute('TRUNCATE reviews;')
    db.session.commit()