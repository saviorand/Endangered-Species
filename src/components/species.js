import React from 'react';
 const Endangered = ({ ExampleSpecie, species, regions }) => {
         
      return (

// {species.map((specie) => (
  //       <div className="p-8">
    //          <h3 className="text-lg">{specie.scientific_name}</h3>
    //         <p>{specie.taxonid}</p>
    //    </div>
    // ))}

      	<div>
        <div>
          <center><h2 className="text-xl my-8">Region</h2></center>
          <div>
          {regions.name} 
          </div>
          <div>
          {regions.identifier}
          </div>

       </div>

        <div>
          <center><h2 className="text-xl my-8">Species list</h2></center>
           <p>{ExampleSpecie.scientific_name}</p>
           

       </div> 


       {/* 
           <p>{species.taxonid}</p>
           <h3 className="text-lg">{species.scientific_name}</h3>
           
        */}
       </div>
      )
    };

    export default Endangered