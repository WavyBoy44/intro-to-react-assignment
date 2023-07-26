import "./styles/UserProfile.css";
export default function UserProfile(props){
    console.log(props.imgUrl)
    return(
        <div className="container">
            <h1>{props.name}</h1>
            <p>{props.email}</p>
            <img src={props.imgUrl} alt="profile picture" />
        </div>
    )
}