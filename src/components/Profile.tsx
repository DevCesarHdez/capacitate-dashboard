import { FC } from "react"

const Profile: FC<PeopleProps> = ({email, people}) => {
    const {name, lastName} = people[0]
    return <div className="profile">
        <div className="profile_avatar">
            <span className="profile_letter">{name.charAt(0)}</span>
        </div>
        <div className="profile_info">
            <ul>
                <li>Email: {email}</li>
                <li>Nombre: {`${name} ${lastName}`}</li>
            </ul>
            <button className="secondary">Ediar</button>
        </div>
    </div>
}
 
export default Profile