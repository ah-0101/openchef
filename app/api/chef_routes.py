from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, db

chef_routes = Blueprint('chefs', __name__)


@chef_routes.route('/')
def get_all_chefs():
    users = User.query.all()
    return {'chefs': [user.to_dict() for user in users if user.chef_id]}
