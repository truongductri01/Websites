import React from 'react';

class EmployeesList extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          employees: this.props.employees,
          input: ""
      };
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
      const arr=[];
      const value = event.target.value;
      const lowerValue = value.toLowerCase();
      const {employees} = this.props;

      for(let object of employees){
          let nameValue = object.name;
          let lowerNameValue = nameValue.toLowerCase();
          if(lowerNameValue.includes(lowerValue)){
              arr.push({name: nameValue});
          }
      }
      this.setState({employees: arr, input: value});
  }

  render() {
      const employees = this.state.employees;
    return (
      <React.Fragment>
        <div className="controls">
          <input type="text" className="filter-input" data-testid="filter-input" value={this.state.input} onChange={this.handleChange}/>
        </div>
        <ul className="employees-list">
          { employees.map(employee => (
            <li key={employee.name} data-testid="employee">{employee.name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
