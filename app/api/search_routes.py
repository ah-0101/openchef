from flask import Blueprint, jsonify, session, request
from app.models import User, db, Chef,Food_Type
from flask_login import current_user, login_user, logout_user, login_required

search_routes = Blueprint('search', __name__)


@search_routes.route('/')
def getFoodTypeAndChefName():
#   user = User.query.get(keyword)
    chef = User.query.join(Chef).all()
    Food = Food_Type.query.all() 
    # print('food and chef >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',foodAndChef)
    return jsonify({'chefs': [user.to_dict() for user in chef], 'food': [food.to_dict_search() for food in Food] })
