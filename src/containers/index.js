import React, { Component } from 'react';
import SeriesList from '../components/SeriesList/index';
import Loader from '../components/loader';
class Series extends Component {
  
    state = {
        series: [],
        seriesName: '',
        isFetching: false
      }
    

      onSeriesInputChange = e => {
          this.setState({seriesName: e.target.value, isFetching: true});
        fetch(` http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({series: json, isFetching: false}));
        
          
          
      }
    
    render() {
        const { series, seriesName, isFetching } = this.state;
        return (
<div>
<div>
    <input 
    value={seriesName}
    type="text"
     onChange={this.onSeriesInputChange} />
</div>
{
    !isFetching && series.length == 0 && seriesName.trim() == ''
    &&
    <p> please provide the series name </p>
}
{
    !isFetching && series.length === 0 && seriesName.trim() != ''
    &&
    <p>  No Tv series found with the name you  are given  </p>
}
{
    isFetching 
    &&
   <p>Loading...</p>
}
{
    !isFetching
    &&
    <p><SeriesList list={this.state.series} />    </p>
}

</div>
        )
    }
}

export default Series;