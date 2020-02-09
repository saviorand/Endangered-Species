import React from 'react';

const Endangered = ({ Posts, myArray, species, regions }) => {

      return (

// {species.map((specie) => (
  //       <div className="p-8">
    //          <h3 className="text-lg">{specie.scientific_name}</h3>
    //         <p>{specie.taxonid}</p>
    //    </div>
    // ))}

      	<div>
        <div>
          <center><h2 className="text-xl my-8">Selected Region (Random region for now)</h2></center>
          <div>
          {regions.name} 
          </div>
          <div>
          {regions.identifier}
          </div>

       </div>

        <div>
          <center><h2 className="text-xl my-8">Species list</h2></center>
          <center><h3 className="text-lg my-8">Critically endangered species, all classes</h3></center>

           {myArray.map((item, i) => (
           <div>
            <p>{item.taxonid}</p>
            <p>{item.scientific_name}</p>
            <p>{Posts[i]}</p>
           </div>
           ))}

          <center><h3 className="text-lg my-8">Critically endangered species, mammals only</h3></center>


           
           

       </div> 



       
       </div>
      )
    };

    export default Endangered