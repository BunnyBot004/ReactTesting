import { createRoot } from 'react-dom/client'
import {App, ReturnExample, ThirdReturnExample} from './App.jsx'


// TODO(human): Import the BasicConcepts component from BasicConcepts-Solution.jsx
import BasicConcepts from './BasicConcepts-Solution.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <h1>Hello React (from the main.jsx file)!</h1>
        <App item="TinyHouse"/>
        <ReturnExample />
        <ThirdReturnExample />

        {/* TODO(human): Replace the content below with <BasicConcepts /> to see the exercise
         * You can remove or comment out the <h1> and <App /> when you're ready
         */}
        {/*<BasicConcepts />*/}
    </>
)  