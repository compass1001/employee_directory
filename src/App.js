import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Employee Directory Application</h1>
                </header>
                <div>
                    <EmployeeList employees={employees} />
                </div>
            </div>
        );
    }
}

const employees = [
    { id: 0, name: 'John Smith',bio:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, ' },
  	{ id: 1, name: 'Erik Patrik','bio':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, ' },
  	{ id: 2, name: 'Shannon Huwer','bio':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, ' }
];

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedIndex: -1
        }
        this.handleClick = this.handleClick.bind(this);
    }

    // expandedIndex is used to track which employee's name has been clicked in the list.
    // expandedIndex = -1 means everything is collapsed.
    handleClick(index){
        if(index === this.state.expandedIndex){
            this.setState({
                expandedIndex:-1
            })
        }else{
            this.setState({
                expandedIndex:index
            })
        }
    }

    render(){
        const employeeList = [];
        this.props.employees.forEach((employee) => {
            employeeList.push(
            <Employee
            employee={employee}
            key={employee.id} hidden={this.state.expandedIndex === employee.id? '':'hidden'}
            onNameClick={this.handleClick} />
            );
        });
        return(
            <ul className="employees">
                {employeeList}
            </ul>
        )
    }
}

class Employee extends React.Component {
    constructor(props){
        super(props);
        this.handleNameClick = this.handleNameClick.bind(this);
        this.handleContentClick = this.handleContentClick.bind(this);
    }

    handleNameClick(e) {
        this.props.onNameClick(this.props.employee.id);
    }

    handleContentClick(){
        alert(this.props.employee.name + ': ' + this.props.employee.bio);
    }

    render(){
        return(
            <li className="employee">
                <div onClick={this.handleNameClick} className="name">{this.props.employee.name}</div>
                <div onClick={this.handleContentClick} className={'bio ' + this.props.hidden}>{this.props.employee.bio}</div>
            </li>
        )
    }
}

export default App;
