import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  // This is the basic test provided by create-react-app
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('adds two numbers together', () => {
    // Simple assertion, that a result, is equal to 3
    const result = 1 + 2;
    expect(result).toEqual(3);
});

it('calls a function', () => {
    // Example for calling a function, and checking the result
    // A function can be imported from elsewhere, this is just a shortcut to demo
    function adds(x ,y) {
        return x + y;
    }

    const result = adds(1,2);
    expect(result).toEqual(3);
});

it('Resolves a promises', () => {
    // When returning a Promise, the test checks that a promise resolves
    return new Promise((resolve,reject) => {
        resolve();
    })
});

it('Shows the header', () => {
    // Example using enzyme, to check that the header is as we expect
    const component = shallow(<App />);
    // Using a CSS selector, to fetch the text in the <H2> tag
    const headerText = component.find('.App-header h2').text();
    expect(headerText).toEqual('Welcome to React');
});

it('Creates a snapshot test', ()=> {
    // Create a snapshot file in src/__snapshots__/App.test.js.snap to check the results against

    // Render the component
    const component = renderer.create(<App />);

    // Convert the component to JSON
    const componentTree = component.toJSON();

    // Check the JSON against the snapshot
    expect(componentTree).toMatchSnapshot();
});
