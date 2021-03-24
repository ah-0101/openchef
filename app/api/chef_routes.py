from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, db

chef_routes = Blueprint('chefs', __name__)


@chef_routes.route('/')
def get_all_chefs():
    users = User.query.all()
    return {'chefs': [user.to_dict() for user in users if user.chef_id]}


# @chef_routes.route('/', methods=['POST'])
# def create_chefs():

    #   // @app.route("/simple-form", methods=["POST"])
    # def form_post():
    #     form = SimpleForm()
    #     if form.validate_on_submit():
    #         data = form.data
    #         person = SimplePerson(
    #             name=data['name'],
    #             age=data["age"],
    #             bio=data['bio']
    #         )
    #         db.session.add(person)
    #         db.session.commit()
    #         return redirect('/')
    #     elif not form.validate_on_submit():
    #         return "Bad Data"