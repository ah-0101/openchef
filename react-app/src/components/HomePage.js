import React from 'react';
import { useEffect, useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from './SearchBar'
// import ChefsContainer from './ChefsContainer'
import { allChefs } from '../store/chefs';
import { getFoodTypes } from '../store/food_types';
import ChefDetailPage from './ChefDetailPage';
import { getChefReviews } from '../store/chef_reviews';
import { nanoid } from 'nanoid';
import './HomePageContainer.css'

export default function HomePage() {
    const user = useSelector(state => state.session.user)
    const chefs = useSelector(state => state.chefs)
    const [chefId, setChefId] = useState()
    const [search, setSearch] = useState([])
    const [barId, setBarId] = useState(null)
    const history = useHistory()
    const dispatch = useDispatch()
    // testing use effect for the chef detail page
    useEffect(() => {
        dispatch(getFoodTypes())
        dispatch(allChefs())

    }, [])

    const chefInfo = async (e) => {
        e.preventDefault()
        // setBarId(chef?.id)
        setChefId(e.target.id)
        await dispatch(getChefReviews(e.target.id))
    }
    const chefInfoDisplay = async (e) => {
        e.preventDefault()
        await dispatch(getChefReviews(e.target.id))
        setChefId(e.target.id)
    }


    const chefArr = Object.values(chefs)

    //fix this later
    if (user == null || user.errors) {
        history.push('/login')
    }
    let chef_city;
    let chef_price;
    let chef_bio;
    let chef_img;
    let chef_food_type;
    chefArr.forEach(chef => {
        if (chef.chef_id == barId) {
            chef_city = chef.city
            chef_price = chef.chef.price
            chef_bio = chef.chef.bio
            chef_food_type = chef.chef.food_type_id == 2 ?
                'Food Type: American' : chef.chef.food_type_id == 3 ?
                    'Food Type: Middle Eastern' : chef.chef.food_type_id == 1 ?
                        'Food Type: Italian' : chef.chef.food_type_id == 4 ?
                            'Food Type: Mexican' : chef.chef.food_type_id == 5 ?
                                'Food Type: Japanese' : chef.chef.food_type_id == 4 ?
                                    'Food Type: Chinese' : 'Expert at all meals'
        }
    })
    // if(barId === )
    const searchStuff = (
        <>


            <SearchBar search={search} setSearch={setSearch} setBarId={setBarId} barId={barId} setChefId={setChefId} />
            {/* <div id={barId}  className={classHandler} onClick={chefInfo}> */}
            {/* <h1 className="chef-name" id={barId}>{search?search:'no match'}</h1> */}
            {/* <p className="chef-city" id={barId} >Available In{chef_city}</p> */}
            {/* <img id={barId} className="pic-size" src={chef_img} alt="chef-image"/> */}
            {/* <p id={barId} >{chef_price}</p> */}
            {/* <p id={barId} >{chef_bio}</p> */}
            {/* <p id={barId} >{chef_food_type}</p> */}

            {/* <div className="grid-container">
            <div className="grid-item" id={barId}>{search?search:'no match'}</div>
            <div className="grid-item">Available In{chef_city}</div>
            <div className="grid-item">{chef_price}</div>  
            <div className="grid-item">{chef_food_type}</div>
            </div> */}



            {/* </div> */}



            <div>
                <p className="available-chef"> Available to cook </p>
                {
                    chefArr?.map(chef => (
                        <div key={nanoid()} id={chef.id} className="chef-container" onClick={chefInfoDisplay}>
                            <h1 className="chef-name" id={chef.id}>{chef.first_name} {chef.last_name}</h1>
                            <p className="chef-city" id={chef.id} >Available In {chef.city}</p>
                            <img id={chef.id} className="pic-size" src={chef.chef.profile_image} alt='chef-pic' />
                            <p id={chef.id} className="chef-price" >Price : ${chef.chef.price}</p>
                            <p id={chef.id} className="chef-bio">{chef.chef.bio}</p>
                            {/* <p>{food_type[chef.food_type_id]}</p> */}
                            <p id={chef.id} className="chef-food_type" >{chef.chef.food_type_id == 2 ?
                                'Food Type: American' : chef.chef.food_type_id == 3 ?
                                    'Food Type: Middle Eastern' : chef.chef.food_type_id == 1 ?
                                        'Food Type: Italian' : chef.chef.food_type_id == 4 ?
                                            'Food Type: Mexican' : chef.chef.food_type_id == 5 ?
                                                'Food Type: Japanese' : chef.chef.food_type_id == 6 ?
                                                    'Food Type: Chinese' : 'Expert at all meals'}</p>
                            <button className="btn-style" id={chef.id}>Book Me</button>
                        </div>
                    ))

                }
            </div>



        </>)

    const individualChef = (
        <>
            <ChefDetailPage id={chefId} />
            <button className='back-button' onClick={e => setChefId(null)}>Return To Home</button>
        </>
    )
    return (

        <>
            {chefId ? individualChef : searchStuff}

        </>

    )
}

