
import { useState } from "react";

import Header from "./Header/Header";
import Student from "./Student";

function App() {
    function handleClick() {
    alert("Button clicked!");
}
    const [count, setCount] = useState(0);

    return (
        <div>
          <button onClick={handleClick}>
    Click Me
</button>
            <Header />

            <h2>Welcome to the React</h2>

            <Student name="Kaveesha" />
            <Student name="Saman" />
            <Student name="Nimali" />

            <hr />

            <h2>React Counter</h2>

            <h3>Count: {count}</h3>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

            <button onClick={() => setCount(count - 1)}>
                Decrease
            </button>

        </div>
    );
}

export default App;
