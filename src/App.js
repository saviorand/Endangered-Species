import React from 'react';

import Endangered from './components/species';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {  
    regions: [],
    species: [],
    measures: [],
    measuresMammals: [],
    Posts: [],
    PostsMammals: []

  };

  };
 
  
  componentDidMount() {


  // Fetch random region from the list of regions in the data and store it in the state

    fetch('http://apiv3.iucnredlist.org/api/v3/region/list?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee')
    .then(res => res.json())
    .then((data) => {
      this.setState({regions: data['results'][Math.floor(Math.random() * Math.floor(data['results'].length))]});
    })
    .catch(console.log)


  // Fetch specie list and store it in the state, filter the list by critically endangered species
   // Include a list of species filtered by critically endangered mammals

    fetch('http://apiv3.iucnredlist.org/api/v3/species/region/europe/page/0?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee')
    .then(res => res.json())
    .then((data) => {

      let specieData = data['result'].filter(item => {
         return item['category'] === 'CR'
      });

      let mammalsData = specieData.filter(item => {
         return item['class_name'] === 'MAMMALIA'
      });

      let myMeasures = [];

      myMeasures = specieData.slice(0,2)
      //[0]['taxonid'];

      let myMeasuresMammals = [];

      myMeasuresMammals = mammalsData.slice(0,2)



      this.setState({species: data['result'],
                     mammals: mammalsData,
                     measures: myMeasures,
                     measuresMammals: myMeasuresMammals
    });


  // Fetch conservation measures for all critically endangered species and store them in the state

      this.state.measures.map(entry => {

       fetch('http://apiv3.iucnredlist.org/api/v3/measures/species/id/' + entry.taxonid + '/region/europe?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee')
        .then(res => res.json())
        .then((data) => {
      
      let conservationMeasure = [];

      for (let i = 0; i < data['result'].length; i++){
       
        conservationMeasure.push(data['result'][i]['title']);

        };


      this.setState({
      Posts: [...this.state.Posts, conservationMeasure]
    })
    
    })
    .catch(console.log) 


     // Include conservation measures for critically endangered mammals

      this.state.measuresMammals.map(entry => {

       fetch('http://apiv3.iucnredlist.org/api/v3/measures/species/id/' + entry.taxonid + '/region/europe?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee')
        .then(res => res.json())
        .then((data) => {
      
      let consMeasureMammals = [];

      for (let i = 0; i < data['result'].length; i++){
       
        consMeasureMammals.push(data['result'][i]['title']);

        };


      this.setState({
      PostsMammals: [...this.state.PostsMammals, consMeasureMammals]
    })
    
    })
    .catch(console.log) 
    })

      })

      //

    })
    .catch(console.log)


  };
  
  render (){



  return (
    <div className="myApp" >
      
      <div className="w-full bg-gray-800 flex flex-col align-center" >
      
      <div className="max-w-md bg-white shadow-md rounded mx-auto my-8 p-8">
            
      <Endangered Posts={this.state.Posts} PostsMammalsOnly={this.state.PostsMammals}
      measures={this.state.measures} measuresMammalsOnly={this.state.measuresMammals} 
      species={this.state.species} regions={this.state.regions} />

      </div>
     </div>

    </div>
  );
}};

export default App;
