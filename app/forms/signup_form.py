from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")


class SignUpForm(FlaskForm):
    first_name = StringField('First Name', validators=[
                             DataRequired(), Length(min=4, max=50)])
    last_name = StringField('Last Name',  validators=[
                            DataRequired(), Length(min=4, max=50)])
    city = StringField('City', validators=[
                       DataRequired(), Length(min=4, max=255)])
    email = StringField('Email', validators=[
                        DataRequired(), Email(), Length(min=4, max=75), user_exists])  # noqa
    password = StringField('Password', validators=[
                           DataRequired(), Length(min=6, max=255)])


# test test
# TODO routes- -Seeding Data- -Creating the redux store
