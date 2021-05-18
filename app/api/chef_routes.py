from flask import Blueprint, jsonify, request
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
    reserv = [reservation.to_dict() for reservation in reservations]
    return jsonify({'chefs': [user.to_dict_chefs() for user in users]})

@chef_routes.route('/<int:id>/')
def get_one_chefs(id):
    """
    Passing in chef_id from the component/thunk to get one
    user who is a chef
    """
    chef = Chef.query.get(id)
    return jsonify(chef.to_dict())

@chef_routes.route('/<int:id>/', methods=["PATCH"])
def update_chef(id):
    """
    Updates chef's profile info
    """
    chef = Chef.query.get(id)
    chef.price = request.json.get('price', chef.price)
    chef.bio = request.json.get('bio', chef.bio)
    chef.food_type_id = request.json.get('food_type_id', chef.food_type_id)
    db.session.commit()
    return jsonify(chef.to_dict())
