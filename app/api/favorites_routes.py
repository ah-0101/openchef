from flask import Blueprint, jsonify, request
from app.models import db, Favorite


favorites_routes = Blueprint('favorites', __name__)


@favorites_routes.route('/', methods=['POST'])
def postFavorites():
    print(">>>>>>>>>>>")
    data = request.json
    res = Favorite(
        user_id=data['user_id'],
        chef_id=data['chef_id'],
    )
    db.session.add(res)
    db.session.commit()
    return jsonify(res.to_dict())
