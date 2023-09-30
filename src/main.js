import React, { useState } from "react";
import Card from "./card";
const Main = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const cardData = [
    {
      title: "Ban Cake",
      description:
        "Ingredients:Ripe bananas, mashed with lemon juiceFlour, baking soda, baking powder, and saltButter, vegetable oil, sugar, eggs, vanilla extract, and buttermilkInstructions:Preheat oven to 350°F (175°C). Grease and flour a 9x13-inch pan or two 9-inch round cake pans.Mix mashed bananas with lemon juice.Whisk dry ingredients in one bowl.Cream butter, oil, and sugar in another bowl, add eggs and vanilla.Alternately add dry ingredients and buttermilk, then fold in banana mixture.Pour into the pan(s) and bake for 30-40 mins (9x13) or 25-30 mins (round).Cool, then frost with cream cheese frosting (cream cheese, butter, powdered sugar, vanilla).Slice and enjoy your banana cake!",
      imageUrl:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Raspberry Cake",
      description: "This is the card description 2.",
      imageUrl:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Barbecue",
      description: "This is the card description 3.",
      imageUrl:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Eggs",
      description: "This is the card description 4.",
      imageUrl:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Pizza",
      description: "This is the card description 5.",
      imageUrl:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3x... format&fit=crop&w=500&q=60",
    },
    {
      title: "Ice Cream",
      description: "This is the card description 6.",
      imageUrl:
        "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Burger",
      description: "This is the card description 7.",
      imageUrl:
        "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "beef",
      description: "This is the card description 8.",
      imageUrl:
        "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Chicken breast",
      description: "This is the card description 9.",
      imageUrl:
        "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const filteredCards = cardData.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="row">
        {filteredCards.length === 0 ? (
          <div className="col-md-12">
            <p>No search results found.</p>
          </div>
        ) : (
          filteredCards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Main;
