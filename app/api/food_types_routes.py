from flask import Blueprint, jsonify
from app.models import Food_Type

food_type_routes = Blueprint('food_types', __name__)


@food_type_routes.route('/')
def foods():
    foods = Food_Type.query.all()
    return {"food_types": [food.to_dict() for food in foods]}
