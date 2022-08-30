import React from "react";

export interface Person{
    picture?: string
    country: string;
    age: number;
}

const PersonBox:React.FC<Person> = ({picture, age, country}) => {
    return(
        <div className="person-box">
            <img src={picture}></img>
            <div>
                Age: {age} <br />
                Country: {country}
            </div>
        </div>
    );
}

export default PersonBox;