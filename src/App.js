import React from 'react';
import Endangered from './components/species';
class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {  
    regions: [],
    species: [],
    ExampleSpecie: []

  };

  };
 
  
  componentDidMount() {

  //  fetch('http://jsonplaceholder.typicode.com/users')
  //  .then(res => res.json())
  //  .then((data) => {

  //  this.setState({content: data});

  //})
  //  .catch(console.log);

    fetch('http://apiv3.iucnredlist.org/api/v3/region/list?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee')
    .then(res => res.json())
    .then((data) => {
      this.setState({regions: data['results'][Math.floor(Math.random() * Math.floor(data['results'].length))]});
    })
    .catch(console.log)

    fetch('http://apiv3.iucnredlist.org/api/v3/species/region/europe/page/0?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee')
    .then(res => res.json())
    .then((data) => {
      let specieData = data['result'].filter(item => {
         return item['category'] == 'CR'
      });

      this.setState({species: data['result'],
                    ExampleSpecie: specieData[Math.floor(Math.random() * Math.floor(specieData.length))] 
    });
    })
    .catch(console.log)
    
  };
  
  render (){

  return (
    <div className="myApp" >
      
      <div className="w-full bg-gray-800 flex flex-col align-center" >
        <div className="max-w-md bg-white shadow-md rounded mx-auto my-8 p-8">
            
            Hello world!

      </div>
      <div className="max-w-md bg-white shadow-md rounded mx-auto my-8 p-8">
            
      <Endangered ExampleSpecie={this.state.ExampleSpecie} species={this.state.species} regions={this.state.regions} />

      </div>
     </div>

    </div>
  );
}};

export default App;
