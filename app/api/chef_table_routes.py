from flask import Blueprint, jsonify
from app.models import Chef, db

chef_table_routes = Blueprint('chefs_table', __name__)

@chef_table_routes.route('/')
def get_chefs_table():
  chefs_table = Chef.query.all()
  print(">>>>>>>",chefs_table)
  return {'chefs_table': [chef.to_dict() for chef in chefs_table]}
