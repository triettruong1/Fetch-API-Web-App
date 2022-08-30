import React, { useEffect, useState } from "react";
import PersonBox, { Person } from "./PersonBox";


const Demo:React.FC = () => {
    let [users, setUsers] = useState<Person[]>([]);
    const [isFetching, setFetching] = useState(false);
 
    useEffect(() => {
        setUsers([]);
        async function fetching() {
            setFetching(true);
            for (let i = 0; i < 5; i++) {
                const response = await fetch('https://randomuser.me/api/').then(response => response.json());
                const newRandomUser = response.results[0];
                setUsers(prevUsers => [...prevUsers, 
                    {
                        picture: newRandomUser.picture.thumbnail,
                        country: newRandomUser.location.country,
                        age: newRandomUser.dob.age,
                        gender: newRandomUser.gender
                    }]);
            }
            setFetching(false);
        }
        fetching();
    }, []);

    return (
        isFetching ? 
        (
            <div className="demo box-shadow">
                <h1>loading</h1>
            </div>
        )
        :
        (
            <div className= "demo box-shadow">
                {users.map((user, index) => {
                    return (
                        <PersonBox key={index} {...user}/>                        
                    )
                })}
            </div>
        )
    );
}

export default Demo;