from flask import Blueprint, jsonify
from flask_login import login_required

from app.models import User, db, Chef, Favorite, Reservation


chef_routes = Blueprint('chefs', __name__)


@chef_routes.route('/')
def get_all_chefs():
    users = User.query.join(Chef).all()
    return jsonify({'chefs': [user.to_dict_chefs() for user in users]})

@chef_routes.route('/reservations/')
def get_all_user_reservations():
    users = User.query.join(Chef).all()
    reservations = Reservation.query.all()
    print("RESERVATION--------", reservations)
    reserv = [reservation.to_dict() for reservation in reservations]
    print("reserv----------->>>>>>>>", reserv)
    return jsonify({'chefs': [user.to_dict_chefs() for user in users]})

@chef_routes.route('/<int:id>/')
def get_one_chefs(id):
    print("IDIDIDIDIID", id)
    """
    Passing in chef_id from the component/thunk to get one
    user who is a chef
    """
    # chef = User.query.join(Chef).filter_by(id=Chef.id).first()
    chef = Chef.query.get(id)
    return jsonify(chef.to_dict())


# TODO this is going to fitch the data for the chef where the chef have an 'h' anywhere. # noqa
# ! PS you can set a backTek `` inside the .like and set a variable that will change while typing # noqa
# ! depends on what you type!
# ! also you may be able to do ilike instead for case sensiteve

#  users = User.query.filter(User.first_name.like('h%'))
#     return {'chefs': [user.to_dict() for user in users if user.chef_id]}
# TODO
# TODO you can grab the id of that chef and display it after you fetch it maybe we need to use the # noqa
# TODO the store instead?! and then loop over all the chefs and display it one by one. # noqa
# TODO since we are looping through it we can get the id and onclick navigate to the chef profile. # noqa
# ! if we got it to work we can do a settimeout that will show the chefs only after x amount of milliseconds. # noqa


# @chef_routes.route('/', methods=['POST'])
# def create_chefs():
