from flask import Blueprint, jsonify, session, request
from app.models import User, db, Chef, Food_Type
from flask_login import current_user, login_user, logout_user, login_required

search_routes = Blueprint('search', __name__)


@search_routes.route('/')
def getFoodTypeAndChefName():
    #   user = User.query.get(keyword)
    chef = User.query.join(Chef).all()
    Food = Food_Type.query.all()
    # print('food and chef >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',foodAndChef)
    return jsonify({'chefs': [user.to_dict() for user in chef], 'food': [food.to_dict_search() for food in Food]})

# @search_routes.route('/<id>')
# def chef(id):
#     chef = User.query.filter(User.first_name.ilike(f'{id}'))
#     chefId = chef.to_dict()
#     # for k,v in chefId.items():

    # chefId.items()
    # print('chef >>>>>>>>>>>>>>>>>>>>>>>>>>>', dir(chefId.items()))
    return chefId


# @search_routes.route('/<id>')
# def chef(id):


@search_routes.route('/<id>/')
def getChefReservation(id):
    search_for_chef = User.query.filter(User.first_name.ilike(f'%{id}%')).join(Chef).all()
    return jsonify([user.to_dict() for user in search_for_chef])