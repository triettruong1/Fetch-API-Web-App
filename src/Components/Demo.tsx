import React, { useEffect, useState } from "react";
import PersonBox, { Person } from "./PersonBox";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Demo:React.FC = () => {
    const [users, setUsers] = useState<Person[]>([]);
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
                        picture: newRandomUser.picture.medium,
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
            <div className="demo box-shadow center hidden">
                <Spin indicator={antIcon}/>
                <h2>Fetching users...</h2>
            </div>
        )
        :
        (
            <div className= "demo box-shadow">
                {users.map((user, index) => {
                    return (
                        <PersonBox key={index}{...user}/>                        
                    )
                })}
            </div>
        )
    );
}

export default Demo;