from app.models import db, Food_Type


def seed_food_types():
    food_type1 = Food_Type(name="italian")
    db.session.add(food_type1)
    db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_food_types():
    db.session.execute('TRUNCATE food_types;')
    db.session.commit()
