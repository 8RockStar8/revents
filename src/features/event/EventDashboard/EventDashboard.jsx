import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Grid } from 'semantic-ui-react';

import EventList from './../EventList/EventList';
import EventActivity from './../EventActicity/EventActivity';
import LoadingComponent from './../../../app/layout/LoadingComponent';
import { createEvent, updateEvent, deleteEvent } from './../eventActions';

const mapState = state => ({
    events: state.firestore.ordered.events,
    loading: state.async.loading
});

const actions = {
    createEvent,
    updateEvent,
    deleteEvent
};

class EventDashboard extends Component {
    handleDeleteEvent = id => {
        this.props.deleteEvent(id);
    };

    render() {
        const { events, loading } = this.props;
        if (loading) return <LoadingComponent />;
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList
                        events={events}
                        deleteEvent={this.handleDeleteEvent}
                    />
                </Grid.Column>

                <Grid.Column width={6}>
                    <EventActivity />
                </Grid.Column>
            </Grid>
        );
    }
}

export default connect(
    mapState,
    actions
)(firestoreConnect([{ collection: 'events' }])(EventDashboard));
