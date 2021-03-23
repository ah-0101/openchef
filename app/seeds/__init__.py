from flask.cli import AppGroup
from .users import seed_users, undo_users
from .favorites import seed_favorites, undo_favorites
from .chefs import seed_chefs, undo_chefs
from .food_types import seed_food_types, undo_food_types
from .reviews import seed_reviews, undo_reviews
from .reservations import seed_reservations, undo_reservations

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    # seed_food_types()
    # seed_chefs()
    seed_users()
    seed_favorites()
    # Add other seed functions here

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_food_types()
    undo_chefs()
    undo_users()
    undo_favorites()
    # Add other undo functions here
