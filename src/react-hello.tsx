import * as React from 'react';
import * as ReactDOM from 'react-dom';

const HelloWorld = () => {
    return (<div>
        Hello from React!
    </div>);
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));