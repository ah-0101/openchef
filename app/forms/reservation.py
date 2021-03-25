from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import Reservation


class ReservationForm(FlaskForm):
  user_id = IntegerField('user_id')
  chef_id = IntegerField('chef_id')
  event_date = StringField("event_date")
  event_time = StringField("event_time")
  duration = IntegerField("duration")

