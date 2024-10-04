import useLocalStorage from "./localStorage"
import './theme.css'

export default function LightDarkMode() {
    const [theme,setThem]=useLocalStorage('theme', 'dark')

    function hundleTogleTheme(){
        setThem(theme === 'light'?'dark':'light')
    }
    console.log(theme);
    return(
        <div className="mode-container" data-theme={theme}> 
            <div className="container">
                <h1>Hello World</h1>
                <button onClick={()=>hundleTogleTheme()}>Change Theme</button>
            </div>
        </div>
    )
}