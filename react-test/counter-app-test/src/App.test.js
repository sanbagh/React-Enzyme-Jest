import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

configure({ adapter: new Adapter() });

const setup = () => shallow(<App />);
const component = (wrapper, value) => wrapper.find(`[data-test='${value}']`);

test('render app component', () => {
  const wrapper = setup();
  console.log(wrapper.debug());
  const appComponent = component(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('render button', () => {
  const wrapper = setup();
  const button = component(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('render counter display', () => {
  const wrapper = setup();
  const counterDisplay = component(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const intialCount = component(wrapper, 'count').text();
  expect(intialCount).toBe('0');
});

test('counter value increase by 1 when increment button click', () => {
  const wrapper = setup();
  const button = component(wrapper, 'increment-button');
  button.simulate('click');
  const intialCount = component(wrapper, 'count').text();
  expect(intialCount).toBe('1');
});
