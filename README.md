# Flask React Project

Brief Introduction
Inspired by opentable.com, openchef is a the place where you can find chefs, you can book, make a reservation, update a reservation, and cancel it.

### [live link](https://open-chef.herokuapp.com/login)**

![Alt text](https://github.com/Ace-0101/openchef/blob/main/chefpage.png)

## Technologies
   openChef is built using the following stack & libraries:
 
## Backend 
   1.Python 

   2.PostgreSQL
      *PostgreSQL is a relational database management system emphasizing extensibility and SQL                    compliance.
   

## Frontend

   1.Javascript
   2.React
      *React is a JavaScript library for building user interfaces. It deals with the views and lets you        *choose the rest of your front-end architecture.
   3.Redux
      *Redux is a JavaScript library for managing application state.
      
### how to use :
 #### Install flask dependencies in root directory
$ pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt

#### Install dependencies in react-app directory
$ cd react-app
$ npm install

#### Run back end server from pipenv shell
$ pipenv shell
$ flask run

#### Run front end server
$ npm start

##Hosting 
  1.Heroku
      *Heroku is a platform as a service that enables developers to build, run, and operate applications        entirely in the cloud.
##Features

   *Logged-in users have can book a chef and edit, Logged-in chef can book another chef, and edit his     reservations.
   
###Codes
* This is the search route 
```python 
@search_routes.route('/<id>/')
def getChefReservation(id):
    search_for_chef = User.query.filter(User.first_name.ilike(f'%{id}%')).join(Chef).all()
    return jsonify([user.to_dict() for user in search_for_chef])
```
* This is the fetch 
```javascript
  const keyword = e.target.value
        if (keyword === '') {
            setClassHandler('search-icon')
            setClassHandler2('search-ind-none')
            return
        }else{
            setClassHandler('search-icon-none')
            setClassHandler2('')
        }
        setEvent(e.target.value)
        const chefSearch = await fetch(`/api/search/${keyword}`);
        let jsonChefs = await chefSearch.json();
        setTimeout(() => {
            setSearch(jsonChefs)
        }, 200);
    }
```
* This code is displaying the chefs on the Home-Page
```javascript
 {
                    chefArr?.map(chef => (
                        <div key={nanoid()} id={chef.id} className="chef-container" onClick={chefInfoDisplay}>
                            <h1 className="chef-name" id={chef.id}>{chef.first_name} {chef.last_name}</h1>
                            <p className="chef-city" id={chef.id} >Available In {chef.city}</p>
                            <img id={chef.id} className="pic-size" src={chef.chef.profile_image} alt='chef-pic' />
                            <p id={chef.id} className="chef-price" >Price : ${chef.chef.price}</p>
                            <p id={chef.id} className="chef-bio">{chef.chef.bio}</p>
                            <p id={chef.id} className="chef-food_type" >{chef.chef.food_type_id == 2 ?
                                'Food Type: American' : chef.chef.food_type_id == 3 ?
                                    'Food Type: Middle Eastern' : chef.chef.food_type_id == 1 ?
                                        'Food Type: Italian' : chef.chef.food_type_id == 4 ?
                                            'Food Type: Mexican' : chef.chef.food_type_id == 5 ?
                                                'Food Type: Japanese' : chef.chef.food_type_id == 4 ?
                                                    'Food Type: Chinese' : 'Expert at all meals'}</p>
                            <button className="btn-style" id={chef.id}>Book Me</button>
                        </div>
                    ))

                }
```
