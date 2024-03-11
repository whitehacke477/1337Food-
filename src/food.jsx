import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodCard = ({ title, description, imageUrl, onVote, votes, totalVotes }) => {
  const imageStyle = {
    height: '200px',
    width: '100%',
    objectFit: 'cover',
  };

  return (
    <div className="card mb-4 d-flex flex-column">
      <img src={imageUrl} className="card-img-top" alt={title} style={imageStyle} />
      <div className="card-body">
        <h5 className="card-title"><em>{title}</em></h5>
        <p className="card-text"><em>{description}</em></p>
        <button className="btn btn-primary mr-2 mb-2" onClick={() => onVote(title)}>
         <em> Vote</em>
        </button>
        <div className="progress custom-progress mb-2">
          <div
            className="progress-bar bg-success"
            style={{ width: `${(votes / totalVotes) * 100}%` }}
          />
          <div className="progress-text">{((votes / totalVotes) * 100).toFixed(2)}%</div>
        </div>
      </div>
    </div>
  );
};

const FoodCards = () => {
  const [votes, setVotes] = useState({});
  const [foodData, setFoodData] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState('pasta'); // Default query

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.spoonacular.com/recipes/complexSearch',
          {
            params: {
              apiKey: '49afd6eca28c4ad798d861c415589860',
              query: selectedQuery,
            },
          }
        );

        if (response.status === 200) {
          const recipes = response.data.results.map((recipe) => ({
            title: recipe.title,
            description: recipe.summary,
            imageUrl: recipe.image,
          }));

          setFoodData(recipes);
          initializeVotes(recipes);
        } else {
          console.error('Error fetching recipes:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchData();
  }, [selectedQuery]);

  const initializeVotes = (recipes) => {
    const initialVotes = recipes.reduce((acc, recipe) => {
      acc[recipe.title] = 0;
      return acc;
    }, {});
    setVotes(initialVotes);
  };

  const handleVote = (title) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [title]: prevVotes[title] + 1,
    }));
  };

  const calculateTotalVotes = () => {
    const totalVotes = Object.values(votes).reduce((acc, curr) => acc + curr, 0);
    return totalVotes || 1; // not divide by zero
  };

  const handleQueryChange = (event) => {
    setSelectedQuery(event.target.value);
  };

  const foodCategories = ['pasta', 'burger', 'pizza', 'soup', 'salad', 'dessert'];

  return (
    <div className="container mt-5">
      <div className="mb-4">
        <label htmlFor="foodCategory"><em>Select Food Category: </em></label>
        <select
          id="foodCategory"
          className="form-control"
          onChange={handleQueryChange}
          value={selectedQuery}
        >
          {foodCategories.map((category, index) => (
            <option key={index} value={category}>
             <em>{category.charAt(0).toUpperCase() + category.slice(1)} </em>
            </option>
          ))}
        </select>
      </div>

      <div className="row">
        {foodData.map((food, index) => (
          <div key={index} className="col-md-4">
            <FoodCard
              {...food}
              onVote={handleVote}
              votes={votes[food.title]}
              totalVotes={calculateTotalVotes()}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCards;
