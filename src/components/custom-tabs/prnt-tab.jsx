import Tabs from "./tabs"

export default function TabsTest() {
    const tabs=[
        {
            label:'Tab 1',
            content: <div>This content is for tab 1</div>
        },
        {
            label:'Tab 2',
            content: <div>This content is for tab 2</div>
        },
        {
            label:'Tab 3',
            content: <div>This content is for tab 3</div>
        }
    ]


    function hundleChange(currentTabIndex){
        console.log(currentTabIndex);
    }
    return <Tabs tabContent={tabs} onChange={hundleChange}/>
}