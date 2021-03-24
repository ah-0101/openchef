from flask import Blueprint, jsonify, session, request
from app.models import Reservation, User, db
from flask_login import current_user, login_user, logout_user, login_required

reservation_routes = Blueprint('reservations', __name__)


@reservation_routes.route('/<int:id>/')
def getChefReservations(id):
  user = User.query.get(id)
  print(user)
  return {reservations}
