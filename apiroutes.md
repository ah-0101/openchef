# /api/

## /user

- includes both users and chefs

### GET

- Query Users table where chef_id exists (gives us all chefs)

### UPDATE

A chef can update their chef profile

### /reservations

A logged in user will be able to view all of their current and past reservations:

- Query Reservations table

## GET

- Reservation.user_id === user.id (logged in user's id)

## POST

- Post reservation
  - get chef_id from params
  - get user_id from session
  - get rest of info from form

## PUT

- Refer to POST
- Starting state will be generated from store
- Edit button

## DELETE

- Find Reservation id and delete

### /reservations_chef

- A logged in chef will be able to view all of their current and past reservations:

## GET

- Query Reservations table
  - Reservation.chef_id === user.id (logged in user's id)

## /favorites

### GET

- Query favorites table (get all favorites)
  - Favorites.user_id == user.id

### POST

- Post where user_id == session.user.id and
- Get chef_id from params if they are in the chef's profile
- Or, e.target.id

### DELETE

- Find favorite id and delete

## /reviews

A logged in user will be able to view all of their reviews by clicking on a reviews button

### GET

- Query Reviews table
  - Reviews.user_id == user.id

### POST

On the user profile page, there will be a button on past reservations.
The user can click on that button to add a review for that chef.

- Grab info from the form

### UPDATE

Have an edit button that the user clicks on.

### DELETE

- Find reviews id and delete

## /reviews_chef

A chef will be able to view all of their reviews on their profile page:

### GET

- Query Reviews table
  - Reviews.chef_id == user.id

## /food-types

### GET

- Query Food-types table
  - Get all

## Stores

### Session (logged in user)

Session User Profile Page

- If session.user.chef_id
  - Get chef info from Chef store
- else
  - Get session.user info

### Chefs

### Reservations

### Favorites

### Reviews (all)

- User sees all of their own reviews for all chefs

### Reviews (chef)

- Click on a chef's profile page - dispatch action creator to display all reviews

### Food-types
