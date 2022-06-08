import React from 'react';
import { render } from 'react-dom';
// import { Test } from '../../src';
import { Test } from '../../dist';
const App = () => (
    <Test />
);
render(<App />, document.getElementById("root"));