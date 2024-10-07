import { useEffect, useState } from "react"
import DisplsyDropdown from "./dropdown"

export default function SearchAutoComplete() {

    const [loading,setLoading]=useState(false)
    const [users,setUsers]=useState('')
    const [error,setError]=useState(null)
    const [searchParam,setSearchParam] = useState('')
    const [showDropDown,setShowDropDown] = useState(false)
    const [filteredUsers,setFilteredUsers] = useState([])

    
    async function fetchData() {
        try {
            setLoading(true)
            const response=await fetch('https://dummyjson.com/users')
            const data = await response.json()
            if (data && data.users && data.users.length) {
            setUsers(data.users.map(userItem=>userItem.firstName))
            }

        } catch (error) {
            setLoading(false)
            console.log(error);
            setError(error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

    function hundleChange(event) {
        const query = event.target.value.toLowerCase()
        setSearchParam(query)

        if (query.length > 1 ) {
            const filteredUsers =
            users && users.length?
            users.filter((item)=>item.toLowerCase().indexOf(query) >-1):[]
            setFilteredUsers(filteredUsers)
            setShowDropDown(true)
        }else{
            setShowDropDown(false)
        }
    }
    function huncdleClick(event){
        console.log(event.target.innerText);
        setSearchParam(event.target.innerText)
        setShowDropDown(false)
        setFilteredUsers([])
    }
    if(loading){
        <h2>Loading please wait!!</h2>
    }
    console.log(filteredUsers);
    return(
        <div>
            <div>
                <input type="text" value={searchParam} placeholder="name?" name="search-user" onChange={hundleChange}/>
            </div>
            <div>
                {
                    showDropDown && <DisplsyDropdown data={filteredUsers} huncdleClick={huncdleClick}/>
                }
            </div>
           
        </div>
    )
}