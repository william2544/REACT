import './index.css'

export default function Model({id,header,body,footer}){
    return (
        <div className="container" id={id?id:'model'}>
            <div className="header">
                <span className="close-model-icon">&times;</span>
                {
                    header?header: <h3>This is the header</h3>
                }
            </div>
            <div className="body">
                {
                    body?body: <p>This is the body section</p>
                }
            </div>
            <div className="footer">
                {
                    footer?footer: <p>No footer present</p>
                }
            </div>
        </div>
    )
}