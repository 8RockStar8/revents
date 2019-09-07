import React, { Fragment } from 'react';
import { Segment, List, Item, Label } from 'semantic-ui-react';

const style = {
    display: 'block',
    maxWidth: '128px',
    height: '128px'
};

const EventDetailedSidebar = ({attendees}) => {
    const isHost = false;
    return (
        <Fragment>
            <Segment
                textAlign='center'
                style={{ border: 'none' }}
                attached='top'
                secondary
                inverted
                color='teal'
            >
                {attendees && attendees.length} {attendees && attendees.length === 1 ? 'Person' : 'People'} Going
            </Segment>
            <Segment attached>
                <List relaxed divided>
                    {attendees && attendees.map((attendee) => (
                        <Item key={attendee.id} style={{ position: 'relative' }}>
                            {isHost && 
                                <Label
                                    style={{ position: 'absolute' }}
                                    color='orange'
                                    ribbon='right'
                                >
                                    Host
                                </Label>
                            }
                            <Item.Image size='tiny' className='image' style={style} src={attendee.photoURL} />
                            <Item.Content verticalAlign='middle'>
                                <Item.Header as='h3'>{attendee.name}</Item.Header>
                            </Item.Content>
                        </Item>
                    ))}
                </List>
            </Segment>
        </Fragment>
    );
};

export default EventDetailedSidebar;
