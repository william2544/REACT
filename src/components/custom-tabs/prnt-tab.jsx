import Tabs from "./tabs"

export default function TabsTest() {
    const tabs=[
        {
            label:'Tab 1',
            content: <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus, aspernatur ullam enim mollitia maiores!</div>
        },
        {
            label:'Tab 2',
            content: <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae porro voluptatem corporis libero inventore exercitationem vitae maxime officiis impedit.</div>
        },
        {
            label:'Tab 3',
            content: <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam incidunt odit non, voluptate eum architecto aliquid, adipisci officiis modi at, odio amet veniam atque suscipit.</div>
        }
    ]


    function hundleChange(currentTabIndex){
        console.log(currentTabIndex);
    }
    return <Tabs tabContent={tabs} onChange={hundleChange}/>
}