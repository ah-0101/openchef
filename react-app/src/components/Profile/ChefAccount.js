import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../ChefReviews.css';
import { getFoodTypes } from '../../store/food_types';
import { allChefs, updateChef } from '../../store/chefs';
import { updateUser } from '../../store/session';


function ChefAccount({ first_name, last_name, city }) {
    const user = useSelector(state => state.session.user);
    const chef = useSelector(state => state.chefs[user.id])
    const food_types = useSelector(state => state.food_types)
    const [food_type_id, setFoodTypeId] = useState(chef?.chef.food_type_id);
    const [bio, setBio] = useState(chef?.chef.bio)
    const dispatch = useDispatch();
    const [price, setPrice] = useState(chef?.chef.price)
    const [errors, setErrors] = useState([]);
    const id = user.chef_id

    useEffect(() => {
        dispatch(allChefs())
        dispatch(getFoodTypes())

    }, [dispatch])

    useEffect(() => {
        if (chef) {
            setBio(chef.chef.bio)
            setPrice(chef.chef.price)
        }
    }, [chef])

    const foodsArr = Object.values(food_types);

    const foods = foodsArr.filter(food => food.id !== food_type_id);

    const updateFoodType = (e) => {
        setFoodTypeId(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleBio = (e) => {
        setBio(e.target.value)
    }

    const handleUpdateAccount = async (e) => {
        e.preventDefault();

        const error = []
        if (user.first_name === first_name &&
            user.last_name === last_name &&
            user.city === city &&
            chef.chef.bio === bio &&
            chef.chef.price === price &&
            chef.chef.food_type_id === food_type_id) {
            error.push("No changes have been made! Please make an update.")
        }
        if (first_name === "" ||
            last_name === "" ||
            city === "") {
            error.push("Please fill out all fields");
        }
        setErrors(error)

        if (!error.length) {
            const data = {
                id: user.id,
                first_name: first_name,
                last_name: last_name,
                city: city,
            }
            await dispatch(updateUser(data))

            const chefData = {
                id,
                userId: user.id,
                food_type_id: Number(food_type_id),
                bio,
                price,
            }
            await dispatch(updateChef(chefData));
            alert("Your profile was updated successfully")
        }
    }

    return (
        // Object.values(chef)?.length > 0 &&
        <>
            <div className="input-wrapper">
                <label>Food Type</label>
                <select
                    className="profile-input"
                    onChange={updateFoodType}
                    name="food_type"
                >
                    <option defaultValue value={food_type_id}>{food_types[food_type_id]?.name}</option>
                    {foods && foods.map((food, i) => (
                        <option value={food.id} key={i}>{food.name}</option>
                    ))}
                </select>
            </div>
            <div className="input-wrapper">
                <label>Price $</label>
                <input
                    className="profile-input"
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
                <div className="input-wrapper">
                    <textarea
                        className="profile-input"
                        name="bio"
                        value={bio}
                        onChange={handleBio}
                    />
                </div>
            </div>
            <button type="button" onClick={handleUpdateAccount}>Update</button>
            <ul>
                {errors.map((error, idx) => <li className="error-li" key={idx}>{error}</li>)}
            </ul>
        </>
    )
}


export default ChefAccount;