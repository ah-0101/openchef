import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../ChefReviews.css';
import { getFoodTypes } from '../../store/food_types';
import { allChefs } from '../../store/chefs';


function ChefAccount() {
    const user = useSelector(state => state.session.user);
    const chef = useSelector(state => state.chefs[user.id])
    const food_types = useSelector(state => state.food_types)
    const [foodType, setFoodType] = useState(food_types?.name);
    const [bio, setBio] = useState(chef?.chef.bio)
    const dispatch = useDispatch();
    const [price, setPrice] = useState(chef?.chef.price)
    const id = user.chef_id

    useEffect(() => {
        dispatch(allChefs())
        dispatch(getFoodTypes())

    }, [dispatch])

    useEffect(() => {
        if (chef) {
            setBio(chef.chef.bio)
            setFoodType(chef.chef.food_type)
            setPrice(chef.chef.price)
        }
    }, [chef])

    const foods = Object.values(food_types);

    const updateFoodType = (e) => {
        setFoodType(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleBio = (e) => {
        setBio(e.target.value)
    }

    return (
        chef &&
        <>
            <div>
                <label>Food Type</label>
                <select
                    onChange={updateFoodType}
                    name="food_type"
                >
                    <option value='' disabled>Select one...</option>
                    {foods && foods.map((food, i) => (
                        <option value={foodType} key={i}>{food.name}</option>
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