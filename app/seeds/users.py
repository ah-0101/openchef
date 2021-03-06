from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want


def seed_users():

    demo = User(first_name='Demo', last_name='Test', email='demo@aa.io', city='Houston',
                hashed_password=generate_password_hash(('password')))

    user_chef1 = User(first_name='Chef', last_name='Demo', email='demo_chef@aa.io', city='Houston', chef_id=1,


                     hashed_password=generate_password_hash(('password')))

    user_chef2 = User(first_name='Tom', last_name='Boy', email='tom@aa.io', city='Cedar City', chef_id=2,
                     hashed_password=generate_password_hash(('password')))
    user_chef3 = User(first_name='Daniel', last_name='Sandolman', email='Daniel@aa.io', city='Tampa', chef_id=3,
                     hashed_password=generate_password_hash(('password')))
    user_chef4 = User(first_name='Peter', last_name='Anderson', email='Peter@aa.io', city='South Jordan', chef_id=4,
                     hashed_password=generate_password_hash(('password')))
    user_chef5 = User(first_name='Emad', last_name='Masoud', email='Emad@aa.io', city='Houston', chef_id=5,
                     hashed_password=generate_password_hash(('password')))

    db.session.add(demo)
    db.session.add(user_chef1)
    db.session.add(user_chef2)
    db.session.add(user_chef3)
    db.session.add(user_chef4)
    db.session.add(user_chef5)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
