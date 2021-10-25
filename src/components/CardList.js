import React from 'react';
import Card from './Card.js';

const CardList = ({ robots }) => {
    var date = new Date();
    var uniqueID = 0;

    return (
        <div>
            {
                robots.map((user, i) => {
                uniqueID = `ID ${date.getMilliseconds} + ${i}`;   //Assigning a unique id to each Card so DOM can keep track of each Card
                    return (
                     <Card 
                        key={uniqueID} 
                        id={user.id} 
                        name={user.name}
                        email={user.email}
                     />
                  );
                })
            }
        </div>    
    )
};

export default CardList;