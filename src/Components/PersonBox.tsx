
interface Person{
    picture: string
    location?: {
        country: string;
        [key: string]: any;
    }
    registered?: {
        age: number;
        [key: string]: any;
    }
}

const PersonBox:React.FC<Person> = (person) => {
    return(
        <h1></h1>
    );
}

export default PersonBox;