class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand;
    }
}
class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model
    }
}
var mycar = new Model("Ford", "Mustang");
const vehicleList = [
    mycar,
    new Model("Ford", "F150"),
    new Model("Suzuki", "Gimni"),
];
const authenticated = true;
var greetUser = (val) => "Greetings, " + val;

function App(props) {
    const myelement = (
        <table>
            <tr>
                <th>Name</th>
            </tr>
            <tr>
                <td>John</td>
            </tr>
            <tr>
                <td>Elsa</td>
            </tr>
        </table>
    );

    return (
        <div className="App">
            <h1>Hello (instead from the App.jsx file)!</h1>
            {myelement}

            <p>1. You can see class components defined in exterior parts of the codebase or even in identical files using methods such as:
                <br/> <code>{"{mycar.present()}"}</code> <br/>
                {mycar.present()}
                <br/> <code>{"{mycar.show()}"}</code> <br/>
                {mycar.show()}
                Function calls are also possible using calls such as:
                <br/> <code>{`
                function kwtohp(kw) {
                     return kw * 1.36;
                }
                `}</code> <br/>
                {kwtohp(218)}
            </p>

            <p>2. Lambda functions are also present and can be displayed as:
                <br/> <code>{'var greetUser = (val) => "Hello " + val; ... {greetUser("User")}'}</code> <br/>
                {greetUser("User")}
            </p>

            <p>3. The map() method creates a new array with the results of calling a function for every array element such as:
                <br/> <code>{ "{vehicleList.map(vehiclemodel => (<span>{vehiclemodel.show()}</span>)" }</code> <br/>
                {vehicleList.map(vehiclemodel => (<>
                    <br/>
                    <span>{vehiclemodel.show()}</span>
                </>))}
            </p>

            <p>4. A destructuring example:
                <br/> <code>{'{vehicleList.at(1).show()}'}</code> <br/>
                {vehicleList.at(1).show()}
            </p>

            <p>5. If statements function similarly to those of other languages, but must be used OUTSIDE the .jsx brackets, as demonstrated in:
                <br/> <code>{`
                function Fruit() {
                    const x = 5;
                    let y = "Apple";
                    if (x < 10) {
                        y = "Banana";
                    }
                
                    return (
                        <h4>{y}</h4>
                    );
                }
                `}</code> <br/>
                {Fruit(4)}
            </p>

            <p>6. A ternary operation (i.e. a questionmark if-else) can be done as:
                <br/> <code>{'{authenticated ? "true" : "false"}'}</code> <br/>
                {authenticated ? "true" : "false"}
                and these are the only way to do if-logic inside the jsx brackets
            </p>

            <p>Template strings allow you to write strings that span multiple lines and include embedded expressions with a regex-style operator and mode of functionality.
                <ol>
                    <p>
                        Template strings use backticks (`) instead of quotes and can include:
                    </p>
                    <li>
                        Multiple lines without \n
                    </li>
                    <li>
                        Expressions inside ${} (which can work to contain any valid Javascript expression)
                    </li>
                    <li>
                        Quotes without escaping
                    </li>
                </ol>
                <br/> <code>{`
                const items = ["apple", "banana", "orange"];
                const list = \`You have \${items.length} items:
                \${items.map(item => \`- \${item}\`).join('\n')}\`;
                `}</code> <br/>

                <br/> <code>{`
                const isAdmin = true;
                const message = \`Status: \${isAdmin ? 'Admin' : 'User'}\`;
                `}</code> <br/>
            </p>

            <p>This entire section of p tags is just one big functional component. Arguements can be passed to a component in the form of:
                {`
                    <ComponentName color="red"/>
                `}
                with this component's examle being:
                {props.item}
                You can even refer to components in their entirety within other components (and render them multiple times), such as with:
                {`
                <ReturnExample />
                or
                <ReturnExample></ReturnExample>
                `}
                <ThirdReturnExample />
                <ThirdReturnExample></ThirdReturnExample>
            </p>
        </div>
    );
}

function ReturnExample() {
    return(
        <>
            <h4>Just a simple demonstration of how, within one .jsx file, two functions can be passed back to either another .jsx file or a .html file</h4>
        </>
    )
}

export function ThirdReturnExample() {
    return(
        <>
            <h5>Yet another simple demonstration of how, within one .jsx file, but this time with a mixed export/import</h5>
        </>
    )
}
/*----------------- Helper Functions: -----------------*/
function kwtohp(kw) {
    return kw * 1.36;
}

function Fruit() {
    const x = 5;
    let y = "Apple";
    if (x < 10) {
        y = "Banana";
    }

    return (
        <h4>{y}</h4>
    );
}


export {App, ReturnExample};