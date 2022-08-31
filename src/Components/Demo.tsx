import React, { useEffect, useRef, useState } from "react";
import PersonBox, { Person } from "./PersonBox";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import InfiniteScroll from 'react-infinite-scroller';

const antIcon = <LoadingOutlined />;
// const firstLoadStyle:CSSStyleRule = {
    
// }
const Demo:React.FC = () => {
    const [users, setUsers] = useState<Person[]>([]);
    const [firstLoad, setFirstLoad] = useState(false);
    const parentNodeScrollRef = useRef<HTMLDivElement>(null);
    async function firstFetch() {
        setFirstLoad(true);
        const newRandomUsers :Person[] = [];
        for (let i = 0; i < 5; i++) {
            const response = await fetch('https://randomuser.me/api/').then(response => response.json());
            const userData = response.results[0];
            const newUser : Person = {
                picture: userData.picture.medium,
                country: userData.location.country,
                age: userData.dob.age,
                gender: userData.gender 
            }
            newRandomUsers.push(newUser);
        }
        setUsers(prevUsers => [...prevUsers, ...newRandomUsers]);
        setFirstLoad(false);
    }

    async function fetchMore() {
        const newRandomUsers :Person[] = [];
        for (let i = 0; i < 5; i++) {
            const response = await fetch('https://randomuser.me/api/').then(response => response.json());
            const userData = response.results[0];
            const newUser : Person = {
                picture: userData.picture.medium,
                country: userData.location.country,
                age: userData.dob.age,
                gender: userData.gender 
            }
            newRandomUsers.push(newUser);
        }
        setUsers(prevUsers => [...prevUsers, ...newRandomUsers]);
    }

    useEffect(() => {
        firstFetch();
    }, []);

    return (
        firstLoad ? 
        (
            <div className="demo box-shadow center hidden">
                <Spin indicator={antIcon}/>
                <h2>Fetching users...</h2>
            </div>
        )
        :
        (
            <div className= "demo box-shadow" ref={parentNodeScrollRef}>
                <h2>Our active monthly users!</h2>
                <div className="users-box">
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={fetchMore}
                        hasMore={true}
                        threshold={10}
                        loader={<div className="center" style={{paddingBlock:".215em"}}><Spin indicator={antIcon}/></div>}
                        useWindow={false}
                        style={{width: "100%"}}
                        getScrollParent={() => parentNodeScrollRef.current}
                    >
                        {users.map((user, index) => {
                            return (
                                <PersonBox key={index}{...user}/>                        
                            )
                        })}
                    </InfiniteScroll>
                </div>
            </div>
        )
    );
}

export default Demo;