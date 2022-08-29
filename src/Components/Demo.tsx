import PersonBox from "./PersonBox";

const API_URL = 'https://randomuser.me/api/';

const Demo:React.FC = () => {
    const users = [];
 
    for (let index = 0; index < 5; index++) {
        fetch(API_URL)
        .then((response) => response.json())
        .then((data) => users[index] = data);   
    }

    return (
        <div className="demo box-shadow">
        </div>
    );
}

export default Demo;