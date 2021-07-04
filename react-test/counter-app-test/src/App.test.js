import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

configure({ adapter: new Adapter() });

const setup = () => shallow(<App />);
const findByTestAttr = (wrapper, value) =>
  wrapper.find(`[data-test='${value}']`);

test('render app component', () => {
  const wrapper = setup();
  console.log(wrapper.debug());
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('render increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('render counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const intialCount = findByTestAttr(wrapper, 'count').text();
  expect(intialCount).toBe('0');
});

test('counter value increase by 1 when increment button click', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  const intialCount = findByTestAttr(wrapper, 'count').text();
  expect(intialCount).toBe('1');
});

test('render decrement button', () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  expect(decrementButton.length).toBe(1);
});

test('counter value decrease by 1 when decrement button click', () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  decrementButton.simulate('click');
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('0');
});

test('should display error message when counter value goes down below zero', () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  decrementButton.simulate('click');
  const error = findByTestAttr(wrapper, 'error-element');
  expect(error.length).toBe(1);
});

test('should remove error message when counter value is increased by 1', () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, 'increment-button');
  decrementButton.simulate('click');
  const error = findByTestAttr(wrapper, 'error-element');
  expect(error.exists()).toBe(false);
});
