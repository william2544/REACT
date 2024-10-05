import './index.css'

export default function Model({id,header,body,footer,onClose}){
    return (
        <div className="container" id={id?id:'model'}>
            <div className="header">
                <span className="close-model-icon" onClick={onClose}>&times;</span>
                {
                    header?header: <h3>This is the header</h3>
                }
            </div>
            <div className="body">
                {
                    body?body: <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci minima ex voluptatibus, soluta ratione hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corporis.</p>
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