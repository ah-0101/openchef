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

# @favorites_routes.route('/<int:user_id>/<int:chef_id>', methods=['DELETE'])  # noqa
# def api_remove_user_favorite(user_id, chef_id):
#     if Favorite.query.filter_by(user_id=userId, chef_id=chefid).all() == []:
#         return "unsuccessful"
#     else:
#         favorites = Favorite.query.filter_by(
#             user_id=userid, chef_id=chefid).all()
#         for favorite in favorites:
#             db.session.delete(favorite)
#             db.session.commit()
#         return "success"


# @favorites_routes.route('/<int:user_id>', methods=['GET'])
# def api_get_favorites_for_user(user_id):
#     projects = Favorite.query.filter_by(user_id=userid)
#     return {"favorites": [favorites.to_dict() for favorite in favorites]}


# @favorites_routes.route('/<int:chef_id>', methods=['GET'])
# def api_get_chef_favorites(chef_id):
#     chef_fav = Favorite.query.filter_by(chef_id=chefid)
#     return {"favorites": [favorites.to_dict() for favorite in favorites]}
