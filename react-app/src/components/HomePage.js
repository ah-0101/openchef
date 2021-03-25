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
import './HomePageContainer.css'

export default function HomePage() {
    const user = useSelector(state => state.session.user)
    const chefs = useSelector(state => state.chefs)
    const [chefId, setChefId] = useState()
    const [search, setSearch] = useState('')
    const [barId, setBarId] = useState(null)
    const [classHandler, setClassHandler] = useState("chef-container-none")
    const history = useHistory()
    const dispatch = useDispatch()

    // testing use effect for the chef detail page
    useEffect(() => {
        dispatch(getFoodTypes())
        dispatch(allChefs())
    
    }, [])

    const chefInfo = async (e) => {
        e.preventDefault()
        setChefId(e.target.id)
        // setBarId(chef?.id)
        await dispatch(getChefReviews(e.target.id))
    }
    const chefInfoDisplay = async (e) => {
        e.preventDefault()
        await dispatch(getChefReviews(e.target.id))
        setChefId(e.target.id)
    }
    

    const chefArr = Object.values(chefs)
    console.log('0000000000000000000000000',chefArr)
    
    //fix this later
    if(user == null || user.errors){
        history.push('/login')
    }


    const searchStuff = (
        <>
                
            <SearchBar search={search} setSearch={setSearch} setBarId={setBarId} setClassHandler={setClassHandler}/>
            <div id={barId}  className={classHandler} onClick={chefInfo}>{search?search:'no match'}</div>


            <div>
                {
                 chefArr?.map(chef => (
                    <div id={chef.id} className="chef-container" onClick={chefInfoDisplay}>
                        <h1 className="chef-name" id={chef.id}>{chef.first_name} {chef.last_name}</h1>
                        <p className="chef-city" id={chef.id} >Available In {chef.city}</p>
                        <img id={chef.id} className="pic-size"  src={chef.chef.profile_image} alt='chef-pic'/>
                        <p id={chef.id} >{chef.chef.price}</p>
                        <p id={chef.id} >{chef.chef.bio}</p>
                        <p id={chef.id} >{chef.chef.food_type_id == 2?
                        'Food Type: American':chef.chef.food_type_id == 3?
                        'Food Type: Middle Eastern':chef.chef.food_type_id == 1?
                        'Food Type: Italian':chef.chef.food_type_id == 4?
                        'Food Type: Mexican':chef.chef.food_type_id == 5?
                        'Food Type: Japanese':chef.chef.food_type_id == 4?
                        'Food Type: Chinese':'Expert at all meals'}</p>
                        <button className="btn-style" id={chef.id}>Book Me</button>
                    </div>
                                        ))
                        
                }
           
            </div>
            {/* <DateTimeField /> */}
        
        </>)

    const indivdualChef = (
        <>
            <ChefDetailPage id={chefId} />
            <button onClick={e => setChefId(null)}>Back button test</button>
        </>
    )
    return (

        <>
            {chefId ? indivdualChef : searchStuff}
            
        </>

    )
}

