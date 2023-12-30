import { useParams } from "react-router-dom";

// const linkon = useParams({})
const linkon = 'anon'

function UseParamThing() {
    const {username}=useParams()
    return (
        <div>
            <h1>i am on link on with useParam : {username}</h1>
        </div>
    )
}

export default UseParamThing;