import React, { useState } from 'react';

const Chefmeals = () => {
    const [meals, setMeals] = useState([]);
    const [mealName, setMealName] = useState('');
    const [mealDescription, setMealDescription] = useState('');
    const [mealPhoto, setMealPhoto] = useState(null);

  const handleMealNameChange = (event) => {
    setMealName(event.target.value);
  };

  const handleMealDescriptionChange = (event) => {
    setMealDescription(event.target.value);
  };

  const handleMealPhotoChange = (event) => {
    setMealPhoto(event.target.files[0]);
  };

  const handleAddMeal = () => {
    if (mealName && mealDescription && mealPhoto) {
      const newMeal = {
        name: mealName,
        description: mealDescription,
        photo: mealPhoto,
      };

      setMeals([...meals, newMeal]);

      // Clear input fields
      setMealName('');
      setMealDescription('');
      setMealPhoto(null);
    }
  };

  const handleDeleteMeal = (index) => {
    const updatedMeals = [...meals];
    updatedMeals.splice(index, 1);
    setMeals(updatedMeals);
  };

  return (
    <div className="container mt-5   ">
      <h1 className="mb-4 text-center"><em><b>Chef Meals</b></em></h1>
      <div className="row ">
        <div className="">
          <div className="card">
            <div className="card-body " style={{backgroundColor:' rgb(230, 227, 227)'}}>
              <h5 className="card-title text-center"><em><b>Add New Meal</b></em></h5>
              <div className="form-group">
                <label className='mb-1'><em><b>Name:</b></em></label>
                <input
                  type="text"
                  className="form-control"
                  value={mealName}
                  onChange={handleMealNameChange}
                />
              </div>
              <div className="form-group">
                <label className='mb-1 mt-1'><em><b>Description:</b></em></label>
                <input
                  type="text"
                  className="form-control"
                  value={mealDescription}
                  onChange={handleMealDescriptionChange}
                />
              </div>
             
              <div class="input-group mt-3 mb-3">
                    <input 
                        type="file" 
                        className="form-control" 
                        onChange={handleMealPhotoChange}
                        id="inputGroupFile01"
                    />
                </div>
              <button
                className="btn btn-success btn-block"
                onClick={handleAddMeal}
              >
                <em>Add Meal</em>
              </button>
            </div>
          </div>
        </div>
        <div className=" container mt-5">
        <h1 className="mb-4 text-center"><em><b>the meals </b></em></h1>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th><em>Name</em></th>
                <th><em>Description</em></th>
                <th><em>Photo</em></th>
                <th><em>Actions</em></th>
              </tr>
            </thead>
            <tbody>
              {meals.map((meal, index) => (
                <tr key={index}>
                  <td>{meal.name}</td>
                  <td>{meal.description}</td>
                  <td>
                    <img
                      src={URL.createObjectURL(meal.photo)}
                      alt={meal.name}
                      className="img-thumbnail"
                      style={{ maxWidth: '100px' }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger  ml-5 mt-4"
                      onClick={() => handleDeleteMeal(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Chefmeals;
