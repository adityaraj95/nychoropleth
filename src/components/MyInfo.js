import React from 'react';
import logo from './logo.png';



function MyInfo(){
	
	return(
	<div>
	<header>
          <img src={logo} alt="logo" class="imgg" />
		  
		  <h1>Welcome</h1>
          
          
            
        </header>
		
		<div>
			<p>Data Visualization of New York City - Manhattan using Choropleth Map which uses GeoJson 
				File having population and number of restaurants in different Zip Codes of the City.</p>
			<br/><br/><br/>
			
			<h4>
            Hover Over The Map to get the information.
          </h4>
		  
		</div>
	
	
	
	</div>
	)
	
}

export default MyInfo;
