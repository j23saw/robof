import React from 'react';
import Card from './Card';
import {robots} from './robots';
const Cardlist = ({ robots }) => {
    return (
        <div>
            {
                robots.map((u, i) => {
                    return (
                        <Card
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    )
                    }
                )
            }
        </div>
    )
}

export default Cardlist;