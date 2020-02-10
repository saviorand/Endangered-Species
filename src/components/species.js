import React from 'react';

const Endangered = ({ Posts, PostsMammalsOnly, measures, measuresMammalsOnly, species, regions }) => {

      return (


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

           {measures.map((item, i) => (
           <div>
            <p>{item.taxonid}</p>
            <p>{item.scientific_name}</p>
            <p>{Posts[i] + ' '}</p>
           </div>
           ))}

          <center><h3 className="text-lg my-8">Critically endangered species, mammals only</h3></center>

            {measuresMammalsOnly.map((item, i) => (
           <div>
            <p>{item.taxonid}</p>
            <p>{item.scientific_name}</p>
            <p>{PostsMammalsOnly[i] + ' '}</p>
           </div>
           ))}
           
           

       </div> 



       
       </div>
      )
    };

    export default Endangered