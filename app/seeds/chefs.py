from werkzeug.security import generate_password_hash
from app.models import db, Chef


def seed_chefs():

    demo = Chef(food_type_id=2, price=60, bio="I have been a chef for 20 years and am the best",
                profile_image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Feducationcareerarticles.com%2Fwp-content%2Fuploads%2F2014%2F07%2FChef9.jpg&f=1&nofb=1")
    chef1 = Chef(food_type_id=1, price=50, bio="I love to cook! My mom taught me to cook when I was 5 years old.",
                 profile_image="https://i.postimg.cc/W1RQGDyh/faceless-profile1.jpg")
    chef2 = Chef(food_type_id=3, price=70, bio="Cooking is cool. Hire me for all your family events.",
                 profile_image="https://i2.wp.com/www.lifeofanarchitect.com/wp-content/uploads/2014/12/Richard-Chamberlain-Chef.jpg")
    chef3 = Chef(food_type_id=4, price=55, bio="Cooking is life for me. I love it more than anything else in the world. That's why my food is world class.",
                 profile_image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.stunewslaguna.com%2Fimages%2Fstories%2Feditorial%2Foct19E%2FOC-Chefs-cocktails.jpg")
    chef4 = Chef(food_type_id=6, price=120, bio="I will guarante the best cooking experience ever, Animal friendly and Covid-19 safe environment",
                 profile_image="https://i.postimg.cc/ydrGkW96/female-profile2.jpg")
    # chef5 = Chef(food_type_id=5, price=100, bio="I've traveled the world and learned to cook the foods of the world. My favorite food to cook for people is a dish called 'Mystery Meat'.",
    #              profile_image="https://i.postimg.cc/BQjZv1ry/male-profile5.jpg")
    # chef6 = Chef(food_type_id=6, price=60, bio="You will love my food! I've cooked for kings, queens, and presidents.",
    #              profile_image="https://i.postimg.cc/ZY7KZLMp/male-profile6.jpg")
    # chef7 = Chef(food_type_id=5, price=75, bio="My grandmother taught me how to cook and I love sharing her recipes with my skills and training.",
    #              profile_image="https://i.postimg.cc/TP0Fvt3D/male-profile3.jpg")
    # chef8 = Chef(food_type_id=4, price=40, bio="I'm a self taught chef. Been cooking for 6 months.",
    #              profile_image="https://i.postimg.cc/ht9NpDFM/male-profile2.jpg")
    # chef9 = Chef(food_type_id=3, price=85, bio="Trying my food will be the best thing you've ever done. We'll see you again very soon after you try my food.",
    #              profile_image="https://i.postimg.cc/ydN510Dr/male-profile4.jpg")
    db.session.add(demo)
    db.session.add(chef1)
    db.session.add(chef2)
    db.session.add(chef3)
    db.session.add(chef4)
    # db.session.add(chef5)
    # db.session.add(chef6)
    # db.session.add(chef7)
    # db.session.add(chef8)
    # db.session.add(chef9)
    db.session.commit()


def undo_chefs():
    db.session.execute('TRUNCATE chefs;')
    db.session.commit()
# Adds a demo user, you can add other users here if you want
