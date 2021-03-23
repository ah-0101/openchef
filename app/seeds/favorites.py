from app.models import db, Favorite


def seed_favorites():

    db.session.add(demo)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_favorites():
    db.session.execute('TRUNCATE favorites;')
    db.session.commit()
