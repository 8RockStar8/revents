import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Segment, Icon } from 'semantic-ui-react';

const Marker = () => (
    <Icon name='marker' size='big' color='red'></Icon>
);

const EventDetailedMap = ({ lat, lng }) => {
    const zoom = 14;
    return (
        <Segment attached='bottom' style={{padding: 0}}>
            <div style={{ height: '300px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: 'AIzaSyCpSJrFcJ26NCUBEhbdG3g5hRWeKnogLyo'
                    }}
                    defaultCenter={{lat, lng}}
                    efaultZoom={zoom}
                >
                    <Marker
                        lat={lat}
                        lng={lng}
                    />
                </GoogleMapReact>
            </div>
        </Segment>
    );
};

export default EventDetailedMap;
