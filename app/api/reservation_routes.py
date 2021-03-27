from flask import Blueprint, jsonify, session, request
from app.models import Reservation, User, db
from flask_login import current_user, login_user, logout_user, login_required
from app.forms import ReservationForm

reservation_routes = Blueprint('reservations', __name__)


@reservation_routes.route('/<int:id>/')
def getChefReservations(id):
    reservations = Reservation.query.filter_by(user_id=id).all()
    # reservations currently returns a list of object. IS THE TO_DICT NOT WORKING?
    print("---------ID ROUTE", reservations)
    # user = User.query.get(id)
    return jsonify({"reservations": [reservation.to_dict() for reservation in reservations]})

@reservation_routes.route('/<int:id>/', methods=['PATCH'])
def updateReservation(id):
    reservation = Reservation.query.get(id)
    reservation.user_id = request.json.get('user_id', reservation.user_id)
    reservation.chef_id = request.json.get('chef_id', reservation.chef_id)
    reservation.event_date = request.json.get('event_date', reservation.event_date)
    reservation.event_time = request.json.get('event_time', reservation.event_time)
    reservation.duration = request.json.get('duration', reservation.duration)
    db.session.commit()
    return jsonify(reservation.to_dict())


@reservation_routes.route('/reservation/')
def getReservations():
    reservations = Reservation.query.join(User).all()
    print("------->>>>>", reservations)
    return jsonify({"reservations": [user.to_dict() for user in reservations]})


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


@reservation_routes.route('/chef-reservation/<int:id>/')
def getChefReservation(id):
    chef_reservations = Reservation.query.filter_by(chef_id=id).all()
    return jsonify({"reservations": [reservation.to_dict() for reservation in chef_reservations]})