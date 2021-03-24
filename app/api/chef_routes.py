from flask import Blueprint, jsonify
from flask_login import login_required

from app.models import User, db, Chef,Favorite




chef_routes = Blueprint('chefs', __name__)


@chef_routes.route('/')
def get_all_chefs():
    users = User.query.join(Chef).all()
    return jsonify({'chefs': [user.to_dict() for user in users]})




#TODO this is going to fitch the data for the chef where the chef have an 'h' anywhere.
#! PS you can set a backTek `` inside the .like and set a variable that will change while typing
#! depends on what you type!
#! also you may be able to do ilike instead for case sensiteve

#  users = User.query.filter(User.first_name.like('h%'))
#     return {'chefs': [user.to_dict() for user in users if user.chef_id]}
#TODO                                                                             
#TODO you can grab the id of that chef and display it after you fetch it maybe we need to use the
#TODO the store instead?! and then loop over all the chefs and display it one by one.
#TODO since we are looping through it we can get the id and onclick navigate to the chef profile.
#! if we got it to work we can do a settimeout that will show the chefs only after x amount of milliseconds.


# @chef_routes.route('/', methods=['POST'])
# def create_chefs():

    #   // @app.route("/simple-form", methods=["POST"])
    # def form_post():
    #     form = SimpleForm()
    #     if form.validate_on_submit():
    #         data = form.data
    #         person = SimplePerson(
    #             name=data['name'],
    #             age=data["age"],
    #             bio=data['bio']
    #         )
    #         db.session.add(person)
    #         db.session.commit()
    #         return redirect('/')
    #     elif not form.validate_on_submit():
    #         return "Bad Data"

