import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './profile.css';
import { updateUser } from '../../store/session';
import { getFoodTypes } from '../../store/food_types';
import { allChefs, getOneChef } from '../../store/chefs';


function ChefAccount() {
    const user = useSelector(state => state.session.user);
    const chef = useSelector(state => state.chefs[user.id])
    const food_type = useSelector(state => state.food_types)
    const [foodType, setFoodType] = useState(food_type?.name);
    const [bio, setBio] = useState(chef?.chef.bio)
    const dispatch = useDispatch();
    const [price, setPrice] = useState()
    const id = user.chef_id

    console.log("BIO-->>>", chef)
    if (chef) {
    }

    useEffect(async () => {
        // dispatch(getOneChef(id))
        await dispatch(allChefs())
        await dispatch(getFoodTypes())
    }, [dispatch])

    const foods = Object.values(food_type);
    console.log("FOOOOD", foods)

    const updateFoodType = (e) => {
        // console.log("BEFORE--->>>", foodType)
        // setFoodType(e.target.id)
        // console.log("AFTER--->>>", foodType)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleBio = (e) => {
        e.preventDefault();
        setBio(e.target.value)
    }

    return (
        // chef &&
        <>
            <div>
                <label>Food Type</label>
                <select
                    onChange={updateFoodType}
                    value={food_type}
                >
                    <option value='' selected disabled>Select one...</option>
                    {/* <option selected disabled hidden>Select one...</option> */}
                    {foods && foods.map((food, i) => (
                        <option key={i}>{food.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Price $</label>
                <input
                    type="number"
                    name="price"
                    className="form_text"
                    min={10}
                    max={300}
                    step={5}
                    onChange={updatePrice}
                    value={price}
                />
            </div>
            <div>
                <div>
                    <label>Bio</label>
                </div>
                <div>
                    <textarea
                        name="bio"
                        value={bio}
                        onChange={handleBio}
                    />
                </div>
            </div>
        </>
    )
}


export default ChefAccount;