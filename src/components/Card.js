import React from 'react'
import CardItem from './CardItem';
import './Card.css';

function Card() {
    return (
        <div className="cards">
            <h1>TATİL YERLERİNE GÖZ ATIN</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem 
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                     
                        />

                        <CardItem 
                        src="images/img-8.jpg"
                        text="Explore the hidden Desert deep inside the Amazon Jungle"
                        label="Desert"
                       
                        />
                    </ul>

                    <ul className="cards_items">
                    <CardItem 
                        src="images/img-7.jpg"
                        text="Explore the hidden Desert deep inside the Amazon Jungle"
                        label="Music"
                      
                        />
                         <CardItem 
                        src="images/img-6.jpg"
                        text="Explore the hidden Desert deep inside the Amazon Jungle"
                        label="Rainy Day"
                      
                        />
                         </ul>
                </div>
            </div>
        </div>
    )
}

export default Card;
