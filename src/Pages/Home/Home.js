import { useSelector } from "react-redux";

const Home = () => {

    //get users from state
    const users = useSelector(state => state);
    return (
        <>
            <p>Home</p>
            <ul>
                {users.map(user => 
                    <li
                        key={user.id}>
                        {user.name}
                    </li>)}
            </ul>
        </>
    )
}

export default Home;