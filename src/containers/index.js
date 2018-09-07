import React, { Component } from 'react';
import SeriesList from '../components/SeriesList/index';

class Series extends Component {
  
    state = {
        series: []
      }
    

      onSeriesInputChange = e => {
        fetch(`https://api.tvmaze.com/ical/countdown?token=kIa3am8AaTCSVnutAZ00_qgl5o1ln-H9&source=followed&filter=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({series: json}));
        
          
          
      }
    
    render() {
        return (
<div>
The length of array {this.state.series.length}
<div>
    <input type="text" onChange={this.onSeriesInputChange} />
</div>
<SeriesList list={this.state.series} />
</div>
        )
    }
}

export default Series;