import React from "react";

export interface Person{
    picture?: string
    country: string;
    age: number;
    gender: string;
}

const PersonBox:React.FC<Person> = ({picture, age, country, gender}) => {
    return(
        <div className={gender.concat(" person-box flex-row")}>
            <div className="person-avatar">
                <img src={picture}></img>
            </div>
            <div className="person-info">
                <div>
                    Age: {age} <br />
                    Country: {country}
                </div>
            </div>
        </div>
    );
}

export default PersonBox;