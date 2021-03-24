from flask import Blueprint, jsonify
from app.models import Review

reviews_routes = Blueprint('reviews', __name__)

@reviews_routes.route('/')
def reviews():
  reviews=Review.query.all()
  return {"reviews": [review.to_dict() for review in reviews]}