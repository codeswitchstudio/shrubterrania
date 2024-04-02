import React from 'react'
import { Fragment } from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api';


function App() {

	const { isLoaded } = useLoadScript({
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY
	})


  return (
    <Fragment>

  <div className='container'>
		<h1 className='text-center'>The Hidden Kingdoms of Nothing to Do</h1>
		<div style={{ width: '100%', height: '90vh' }}>
			{!isLoaded ? (
				<GoogleMap 
					center={{ lat: 14.637915362198289, lng: 121.06170648280157 }} 
					zoom={10} 
					mapContainerStyle={{ 
						width: '100%', 
						height: '90vh', 
			}}>

		</GoogleMap>
		): null}
		</div>
	</div>
    </Fragment>
  
	)

}



export default App