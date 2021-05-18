from flask import Blueprint, jsonify, request
from app.models import Review

reviews_routes = Blueprint('reviews', __name__)


@reviews_routes.route('/chef/<int:id>/')
def chef_reviews(id):
    reviews = Review.query.filter_by(chef_id=id).all()
    return jsonify({"reviews": [review.to_dict() for review in reviews]})


@reviews_routes.route('/<int:id>/')
def user_reviews(id):
    reviews = Review.query.filter_by(user_id=id).all()
    return jsonify({"reviews": [review.to_dict() for review in reviews]})
