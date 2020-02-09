import React from 'react';
import Endangered from './components/species';




class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {  
    regions: [],
    species: [],
    myArray: [],
    Posts: []

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

    fetch('http://apiv3.iucnredlist.org/api/v3/species/region/europe/page/0?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee')
    .then(res => res.json())
    .then((data) => {

      let specieData = data['result'].filter(item => {
         return item['category'] === 'CR'
      });
     


      let myMeasures = [];

      myMeasures = specieData.slice(0,2)
      //[0]['taxonid'];

      

      this.setState({species: data['result'],
                    myArray: myMeasures
    });


  // Fetch conservation measures for all critically endangered species and store them in the state

     //

      this.state.myArray.map(entry => {

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

      })

      //

    })
    .catch(console.log)



//   fetch('http://apiv3.iucnredlist.org/api/v3/measures/species/id/' + id + '/region/europe?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee')
//   .then(res => res.json())
//   .then((data) => {

//      this.setState({
//      Posts: data['result'][0]['title']
      
//    });
//    })
//    .catch(console.log) 
    
  };

  
  
  render (){



  return (
    <div className="myApp" >
      
      <div className="w-full bg-gray-800 flex flex-col align-center" >
      
      <div className="max-w-md bg-white shadow-md rounded mx-auto my-8 p-8">
            
      <Endangered Posts={this.state.Posts} myArray={this.state.myArray} 
      species={this.state.species} regions={this.state.regions} />

      </div>
     </div>

    </div>
  );
}};

export default App;
