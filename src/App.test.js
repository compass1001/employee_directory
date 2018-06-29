import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EmployeeList from './App';
import Employee from './App';
import { shallow,mount } from 'enzyme';

const employees = [
    { id: 0, name: 'John Smith',bio:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, ' },
    { id: 1, name: 'Erik Patrik','bio':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, ' },
    { id: 2, name: 'Shannon Huwer','bio':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, ' }
];

it('renders without crashing', () => {
    const div = document.createElement('div');
    shallow(<App />);
});

it('renders without crashing', () => {
    shallow(<EmployeeList />);
});

it('renders without crashing', () => {
    shallow(<Employee />);
});

it('calls handleClick event on click of a employee name', () =>{
    const handleNameClick = jest.fn();
    let wrapper = mount(<EmployeeList employees={employees} onClick={handleNameClick} />);
    wrapper.find(Employee).find('.name').first().simulate('click');
    expect(handleNameClick.calledOnce).toBe.true;
})

it('calls onClick event on click of a employee bio', () =>{
    const handleContentClick = jest.fn();
    let wrapper = mount(<EmployeeList employees={employees} onClick={handleContentClick} />);
    wrapper.find(Employee).find('.bio').first().simulate('click');
    expect(handleContentClick.calledOnce).toBe.true;
})
