from app.models import db, Favorite


def seed_favorites():

    favorite = Favorite(chef_id=2, user_id=1)
    favorite2 = Favorite(chef_id=3, user_id=1)

    db.session.add(favorite)
    db.session.add(favorite2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_favorites():
    db.session.execute('TRUNCATE favorites;')
    db.session.commit()
