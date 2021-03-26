from flask import Blueprint, jsonify, session, request
from app.models import Reservation, User, db
from flask_login import current_user, login_user, logout_user, login_required
from app.forms import ReservationForm

reservation_routes = Blueprint('reservations', __name__)


@reservation_routes.route('/<int:id>/')
def getChefReservations(id):
    user = User.query.get(id)
    print(user)
    return {reservations}


@reservation_routes.route('/', methods=['POST'])
def postReservation():
    data = request.json
    res = Reservation(
        user_id=data['user_id'],
        chef_id=data['chef_id'],
        event_date=data['event_date'],
        event_time=data['event_time'],
        duration=data['duration']
    )
    db.session.add(res)
    db.session.commit()
    return jsonify(res.to_dict())
