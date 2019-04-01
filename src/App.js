import React from 'react';
import ReactNYC from 'react-nyc-choropleth';
import logo from './logo.png';
import './App.css';


class Example extends React.Component {
  render() {
    const mapboxAccessToken = "pk.eyJ1IjoiYWM5NjgiLCJhIjoiY2p0dmt0OXo3MXBoeTRhcGlhNTNoeDd1biJ9.RzGY-9NERRA84P0oYObGjw" // Your access token
    const mapboxType = "streets";
    const position = [40.7831, -73.9712];
    const zoom = 12;
    const data = [
      {
        name: "Chelsea",
        values: [{label: "ZipCode", val: "10011"}],
        color: "#d1a36a"
      },
	  {
        name: "Hell's Kitchen",
        values: [{label: "ZipCode", val: "10001"}],
        color: "#ef7f56"
      },
	  {
        name: "West Village",
        values: [{label: "ZipCode", val: "10014"}],
        color: "#ffb963"
      },
	  {
        name: "SoHo",
        values: [{label: "ZipCode", val: "10013"}],
        color: "#fff65e"
      },
	  {
        name: "Tribeca",
        values: [{label: "ZipCode", val: "10013"}],
        color: "#f4a941"
      },
	  {
        name: "Battery Park City",
        values: [{label: "ZipCode", val: "10006"}],
        color: "#c7f441"
      },
	  {
        name: "Financial District",
        values: [{label: "ZipCode", val: "10005"}],
        color: "#f4e242"
      },
	  {
        name: "Two Bridges",
        values: [{label: "ZipCode", val: "10002"}],
        color: "#f4cd41"
      }
	  ,
	  {
        name: "Chinatown",
        values: [{label: "ZipCode", val: "10013"}],
        color: "#f2a86d"
      }
	  ,
	  {
        name: "Governors Island",
        values: [{label: "ZipCode", val: "10004"}],
        color: "#ebf441"
      }
	  ,
	  {
        name: "City Hall Area",
        values: [{label: "ZipCode", val: "10007"}],
        color: "#ea9048"
      },
	  {
        name: "Little Italy",
        values: [{label: "ZipCode", val: "10013"}],
        color: "#846a03"
      },
	  {
        name: "Lower East Side",
        values: [{label: "ZipCode", val: "10002"}],
        color: "#ffcc00"
      },
	  {
        name: "Nolita",
        values: [{label: "ZipCode", val: "10012"}],
        color: "#ffc282"
      },
	  {
        name: "NoHo",
        values: [{label: "ZipCode", val: "10012"}],
        color: "#ffac56"
      },
	  {
        name: "East Village",
        values: [{label: "ZipCode", val: "10009"}],
        color: "#ffb056"
      },
	  {
        name: "Greenwich Village",
        values: [{label: "ZipCode", val: "10012"}],
        color: "#ed9a3b"
      },
	  {
        name: "Flatiron District",
        values: [{label: "ZipCode", val: "10010"}],
        color: "#ff8800"
      },
	  {
        name: "Gramercy",
        values: [{label: "ZipCode", val: "10003"}],
        color: "#eda482"
      },
	  {
        name: "Stuyvesant Town",
        values: [{label: "ZipCode", val: "10009"}],
        color: "#ff9868"
      },
	  {
        name: "Kips Bay",
        values: [{label: "ZipCode", val: "10010"}],
        color: "#ff7968"
      },
	  {
        name: "Murray Hill",
        values: [{label: "ZipCode", val: "10016"}],
        color: "#ff5e5e"
      },
	  {
        name: "Midtown East",
        values: [{label: "ZipCode", val: "10022"}],
        color: "#ffa468"
      }
	  ,
	  {
        name: "Midtown West",
        values: [{label: "ZipCode", val: "10019"}],
        color: "#ff8668"
      },
	  {
        name: "Upper East Side",
        values: [{label: "ZipCode", val: "10021"}],
        color: "#ff8282"
      },
	  {
        name: "Upper West Side",
        values: [{label: "ZipCode", val: "10024"}],
        color: "#cc6868"
      }
	  ,
	  {
        name: "Central Park",
        values: [{label: "ZipCode", val: "10023"}],
        color: "#96ff66"
      },
	  {
        name: "Roosevelt Island",
        values: [{label: "ZipCode", val: "10044"}],
        color: "#a54242"
      }
	  ,
	  {
        name: "Spanish Harlem",
        values: [{label: "ZipCode", val: "10035"}],
        color: "#ff8168"
      },
	  {
        name: "Central Harlem",
        values: [{label: "ZipCode", val: "10026"}],
        color: "#ffaaaa"
      },
	  {
        name: "Morningside Heights",
        values: [{label: "ZipCode", val: "10027"}],
        color: "#ed4e4e"
      }
	  ,
	  {
        name: "Hamilton Heights",
        values: [{label: "ZipCode", val: "10031"}],
        color: "#ff4c4c"
      },
	  {
        name: "Randall's Island",
        values: [{label: "ZipCode", val: "10035"}],
        color: "#d13a3a"
      },
	  {
        name: "Washington Heights",
        values: [{label: "ZipCode", val: "10032"}],
        color: "#d64052"
      },
	  {
        name: "Inwood",
        values: [{label: "ZipCode", val: "10034"}],
        color: "#ff5151"
      }
	  ,
	  {
        name: "Marble Hill",
        values: [{label: "ZipCode", val: "10463"}],
        color: "#bc2134"
      }
    ]
    const neighborhoodStyle = { weight: 1, opacity: 1, color: '#666', dashArray: '3', fillOpacity: 0.7 };
    const neighborhoodHoverStyle = { weight: 5, color: '#FFF', dashArray: '1', fillOpacity: 0.7 };
    const excludeNeighborhoods = ["Liberty Island", "Ellis Island"];

    return (
      <div>

	  <header>
          <img src={logo} alt="logo" />	  
	  <h1>Welcome</h1>
          <h4>
            Click on the Map to get the information.
          </h4>
          
            
        </header>
		<div class="map-container">
			<ReactNYC
          mapboxAccessToken={mapboxAccessToken} // Required
          mapHeight="800px" // Required
          mapWidth="600px"
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

export default Example;
