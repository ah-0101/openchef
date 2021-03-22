from flask import Blueprint, jsonify, session, request
from flask_login import current_user
from flask_cors import CORS


session_routes = Blueprint('session', __name__)

@session_routes.route('/')
@cross_origin()
def restoreUser():
  """
  Restores a user for authentication
  """
  user = request.user
  if user:
    return response.jsonify({user})
  else:
    return response.jsonify({})