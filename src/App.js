import React from 'react';
import ReactNYC from 'react-nyc-choropleth';
import './App.css';
import MyInfo from './components/MyInfo';


class Mymap extends React.Component {
  render() {
    const mapboxAccessToken = "pk.eyJ1IjoiYWM5NjgiLCJhIjoiY2p0dmt0OXo3MXBoeTRhcGlhNTNoeDd1biJ9.RzGY-9NERRA84P0oYObGjw" // Your access token
    const mapboxType = "streets";
    const position = [40.7831, -73.9712];
    const zoom = 12;
    const data = [
      {
        name: "Chelsea",
        values: [{label: "ZipCode", val: "10011"},{label: "Population", val:"47,325"},{label: "Restaurants", val:"23"}],
        color: "#f46f6f"
      },
	  {
        name: "Hell's Kitchen",
        values: [{label: "ZipCode", val: "10001"},{label: "Population", val:"45,884"},{label: "Restaurants", val:""}],
        color: "#fc5d5d"
      },
	  {
        name: "West Village",
        values: [{label: "ZipCode", val: "10014"},{label: "Population", val:"31,794"},{label: "Restaurants", val:""}],
        color: "#ffa455"
      },
	  {
        name: "SoHo",
        values: [{label: "ZipCode", val: "10013"},{label: "Population", val:"19,573"},{label: "Restaurants", val:""}],
        color: "#ff7575"
      },
	  {
        name: "Tribeca",
        values: [{label: "ZipCode", val: "10013"},{label: "Population", val:"17,362"},{label: "Restaurants", val:""}],
        color: "#f98b8b"
      },
	  {
        name: "Battery Park City",
        values: [{label: "ZipCode", val: "10006"},{label: "Population", val:"9,252"},{label: "Restaurants", val:""}],
        color: "#f4be6f"
      },
	  {
        name: "Financial District",
        values: [{label: "ZipCode", val: "10005"},{label: "Population", val:"57,627"},{label: "Restaurants", val:""}],
        color: "#f47070"
      },
	  {
        name: "Two Bridges",
        values: [{label: "ZipCode", val: "10002"},{label: "Population", val:" 20,073"},{label: "Restaurants", val:""}],
        color: "#f49b6f"
      }
	  ,
	  {
        name: "Chinatown",
        values: [{label: "ZipCode", val: "10013"},{label: "Population", val:"47,844"},{label: "Restaurants", val:""}],
        color: "#ff7558"
      }
	  ,
	  {
        name: "Governors Island",
        values: [{label: "ZipCode", val: "10004"},{label: "Population", val:"2,990"},{label: "Restaurants", val:""}],
        color: "#ebf441"
      }
	  ,
	  {
        name: "City Hall Area",
        values: [{label: "ZipCode", val: "10007"},{label: "Population", val:"27,563"},{label: "Restaurants", val:""}],
        color: "#ea9048"
      },
	  {
        name: "Little Italy",
        values: [{label: "ZipCode", val: "10013"},{label: "Population", val:"29,619"},{label: "Restaurants", val:""}],
        color: "#ff6647"
      },
	  {
        name: "Lower East Side",
        values: [{label: "ZipCode", val: "10002"},{label: "Population", val:"72,957"},{label: "Restaurants", val:""}],
        color: "#d34747"
      },
	  {
        name: "Nolita",
        values: [{label: "ZipCode", val: "10012"},{label: "Population", val:"6,793"},{label: "Restaurants", val:""}],
        color: "#ffa3a3"
      },
	  {
        name: "NoHo",
        values: [{label: "ZipCode", val: "10012"},{label: "Population", val:"5,731"},{label: "Restaurants", val:""}],
        color: "#ffac56"
      },
	  {
        name: "East Village",
        values: [{label: "ZipCode", val: "10009"},{label: "Population", val:"63,347"},{label: "Restaurants", val:""}],
        color: "#f45353"
      },
	  {
        name: "Greenwich Village",
        values: [{label: "ZipCode", val: "10012"},{label: "Population", val:"72,025"},{label: "Restaurants", val:""}],
        color: "#f43535"
      },
	  {
        name: "Flatiron District",
        values: [{label: "ZipCode", val: "10010"},{label: "Population", val:"14,353"},{label: "Restaurants", val:""}],
        color: "#ff7f7f"
      },
	  {
        name: "Gramercy",
        values: [{label: "ZipCode", val: "10003"},{label: "Population", val:"27,988"},{label: "Restaurants", val:""}],
        color: "#eda482"
      },
	  {
        name: "Stuyvesant Town",
        values: [{label: "ZipCode", val: "10009"},{label: "Population", val:"21,049"},{label: "Restaurants", val:""}],
        color: "#ff9868"
      },
	  {
        name: "Kips Bay",
        values: [{label: "ZipCode", val: "10010"},{label: "Population", val:"50,742"},{label: "Restaurants", val:""}],
        color: "#ff7968"
      },
	  {
        name: "Murray Hill",
        values: [{label: "ZipCode", val: "10016"},{label: "Population", val:"10,864"},{label: "Restaurants", val:""}],
        color: "#ffa3a3"
      },
	  {
        name: "Midtown East",
        values: [{label: "ZipCode", val: "10022"},{label: "Population", val:"24,856"},{label: "Restaurants", val:""}],
        color: "#ffa468"
      }
	  ,
	  {
        name: "Midtown West",
        values: [{label: "ZipCode", val: "10019"},{label: "Population", val:"45,884"},{label: "Restaurants", val:""}],
        color: "#ff8668"
      },
	  {
        name: "Upper East Side",
        values: [{label: "ZipCode", val: "10021"},{label: "Population", val:"124,231"},{label: "Restaurants", val:""}],
        color: "#ff4242"
      },
	  {
        name: "Upper West Side",
        values: [{label: "ZipCode", val: "10024"},{label: "Population", val:"214,744"},{label: "Restaurants", val:""}],
        color: "#f92f2f"
      }
	  ,
	  {
        name: "Central Park",
        values: [{label: "ZipCode", val: "10023"},{label: "Population", val:"0"},{label: "Restaurants", val:""}],
        color: "#96ff66"
      },
	  {
        name: "Roosevelt Island",
        values: [{label: "ZipCode", val: "10044"},{label: "Population", val:"11,661"},{label: "Restaurants", val:""}],
        color: "#a54242"
      }
	  ,
	  {
        name: "Spanish Harlem",
        values: [{label: "ZipCode", val: "10035"},{label: "Population", val:"115,921"},{label: "Restaurants", val:""}],
        color: "#ff8168"
      },
	  {
        name: "Central Harlem",
        values: [{label: "ZipCode", val: "10026"},{label: "Population", val:"116,345"},{label: "Restaurants", val:""}],
        color: "#ff5151"
      },
	  {
        name: "Morningside Heights",
        values: [{label: "ZipCode", val: "10027"},{label: "Population", val:"31,884"},{label: "Restaurants", val:""}],
        color: "#ed4e4e"
      }
	  ,
	  {
        name: "Hamilton Heights",
        values: [{label: "ZipCode", val: "10031"},{label: "Population", val:"47,531"},{label: "Restaurants", val:""}],
        color: "#ff8668"
      },
	  {
        name: "Randall's Island",
        values: [{label: "ZipCode", val: "10035"},{label: "Population", val:"1,648"},{label: "Restaurants", val:""}],
        color: "#ffd87f"
      },
	  {
        name: "Washington Heights",
        values: [{label: "ZipCode", val: "10032"},{label: "Population", val:"201,590"},{label: "Restaurants", val:""}],
        color: "#f92a2a"
      },
	  {
        name: "Inwood",
        values: [{label: "ZipCode", val: "10034"},{label: "Population", val:"58,946"},{label: "Restaurants", val:""}],
        color: "#ff5151"
      }
	  ,
	  {
        name: "Marble Hill",
        values: [{label: "ZipCode", val: "10463"},{label: "Population", val:"9,481"},{label: "Restaurants", val:""}],
        color: "#ffbc7f"
      }
    ]
    const neighborhoodStyle = { weight: 1, opacity: 1, color: '#666', dashArray: '3', fillOpacity: 0.7 };
    const neighborhoodHoverStyle = { weight: 5, color: '#FFF', dashArray: '1', fillOpacity: 0.7 };
    const excludeNeighborhoods = ["Liberty Island", "Ellis Island"];

    return (
      <div>
		
		<MyInfo/>
		
		<div class="map-container">
			<ReactNYC
          mapboxAccessToken={mapboxAccessToken} // Required
          mapHeight="700px" // Required
          mapWidth="500px"
          className="container"
          mapboxType={mapboxType}
          mapCenter={position}
          mapZoom={zoom}
          mapScrollZoom={false}
          neighborhoodOn={true}
          tooltip={true}
          tooltipSticky={false}
          data={data}
          neighborhoodStyle={neighborhoodStyle}
          neighborhoodHoverStyle={neighborhoodHoverStyle}
          excludeNeighborhoods={excludeNeighborhoods}
        />
		</div>
        

      </div>
    )
  }
}


export default Mymap;

