from app.models import db, Food_Type


def seed_food_types():
    food_type1 = Food_Type(name="Italian")
    food_type2 = Food_Type(name="American")
    food_type3 = Food_Type(name="Middle Eastern")
    food_type4 = Food_Type(name="Mexican")
    food_type5 = Food_Type(name="Japanese")
    food_type6 = Food_Type(name="Chinese")

    db.session.add(food_type1)
    db.session.add(food_type2)
    db.session.add(food_type3)
    db.session.add(food_type4)
    db.session.add(food_type5)
    db.session.add(food_type6)
    db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_food_types():
    db.session.execute('TRUNCATE food_types;')
    db.session.commit()
