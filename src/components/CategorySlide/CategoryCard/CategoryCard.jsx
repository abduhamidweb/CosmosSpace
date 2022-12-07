import React from 'react';
import "./styleCategoryCard.css"
const CategoryCard = ({cardImg, cardTitle}) => {
    return (
        <>
            <div className="card shadow-none categoryCard">
                <div className="categoryCardImg">
<img src={cardImg} alt="category-card-img" />
                </div>
                <div className="categoryCarTitle">{cardTitle}</div>
            </div>
        </>
    );
};

export default CategoryCard;