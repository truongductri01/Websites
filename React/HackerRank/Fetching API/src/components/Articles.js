import React from 'react';

class Articles extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      total_pages: 0,
      titles: <li></li>
    };
    this.buttonSeries = this.buttonSeries.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  // Create a series of buttons based on the number of total pages
  buttonSeries(){
    let buttons = [];
    for(let i = 1; i <= this.state.total_pages; i++){
      buttons.push(i); // push the value of each buttons
    }

    let buttonJSX = buttons.map((value) => 
      <button data-testid="page-button" key={`page-button-${value}`} onClick={() => this.handleClick(value)}>{value}</button>
    );

    return buttonJSX;
  }

  updateList(result){
      let valueListElements = []; 

      let data = result.data;
      for(let element of data){
        let title = element.title;
        if(title !== null && title !== ""){
          valueListElements.push(title);
        }
      }

      let tempValueJSX = valueListElements.map((value, index) => 
    <li key={"title-" + (index + 1)} data-testid="result-row">{value}</li>
      );

      return tempValueJSX;
  }


  // For each one, we need to fetch different page and update different values
  async handleClick(value){  // value here will be the page for we to fetch
    // for each click, we will do some fetching.

    let valueJSX = await fetch("https://jsonmock.hackerrank.com/api/articles?page=" + value)
    .then(response => response.json()) 
    .then(result => {
      return this.updateList(result);
    });
    this.setState({titles: valueJSX});
    return valueJSX;
  }


  // then test the program

  componentDidMount(){
    fetch("https://jsonmock.hackerrank.com/api/articles?page=1")
    .then(response => response.json()) 
    .then(result => {
      // Get the total pages
      let total_pages = result.total_pages;
      this.setState((state) => ({
        total_pages: total_pages
      }));


      let tempValueJSX = this.updateList(result);
      this.setState({titles: tempValueJSX});

    });
  }

  render() { 
    return (
      <React.Fragment>
        <div className="pagination">
          <this.buttonSeries/>
        </div>
        <ul className="results">
          {this.state.titles}
        </ul>
      </React.Fragment>
    );
  }
}

export default Articles;
