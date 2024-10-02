
import MenuList from "./menu-list";
import './styles.css'
export default function TreeView({menu=[]}){
    return <ul className="tree-view-container"><MenuList list={menu}/></ul>
}