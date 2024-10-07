export default function DisplsyDropdown({data,huncdleClick}) {
    return(
        <div>
            <ul>
                {
                    data && data.length ?
                    data.map((item,index)=> <li key={index } onClick={huncdleClick}>{item}</li>)
                    :null
                }
            </ul>
            
        </div>
    )
}