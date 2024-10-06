import { useEffect, useState } from "react"
import './index.css'


export default function GitHubProfile(){
    const [useName,setUserName]=useState('')
    const [userData,setUserData]=useState(null)
    const[loading,setLoading]=useState(false)
    const [error,setError]=useState('')

    async function searchUser() {

        try {
            if (!useName) return;
            setLoading(true)
            const response = await fetch(`http://api.github.com/users/${useName}`)
            if (response.status === 404) {
                setLoading(false)
                setError('User not found!')
                setUserData(null)
            }else{
                const user = await response.json()
                console.log(user);
                setUserData(user)
                setLoading(false)
                setUserName('')
            }
            
        } catch (e) {
            console.log(e.message);
        }

        
    }
    if (loading) {
        return <h2>Loading the user, Please wait!!!</h2>
    }
    if (error) {
        <h2>{error}</h2>
    }
    // useEffect(()=>{
    //     searchUser()
    // },[])

    return(
        <div className="profile-container-wrapper">
            <div className="input-area">
                <input type="text"
                placeholder="Insert the username here"
                value={useName}
                onChange={(e)=>setUserName(e.target.value)}
                />
                <button onClick={searchUser}>Search</button>
            </div>
            <div className="user-result">
            {
                userData && <div className="content-container">
                    <div className="image-conrainer">
                        <img src={userData.avatar_url} alt={userData.login} />
                    </div>
                    <div>
                        <p>Public Repos: {userData.public_repos}</p>
                        <p>Followers: {userData.followers}</p>
                        <p>Following: {userData.following}</p>
                    </div>
                </div>
            }
            </div>
        </div>
    )
}