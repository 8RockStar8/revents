import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import { updatePassword } from './../../auth/authActions';

import SettingsNav from './SettingsNav';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotosPage from './PhotosPage';
import AccountPage from './AccountPage';

const actions = {
    updatePassword
};

const mapState = (state) => ({
    providerId: state.firebase.auth.providerData[0].providerId
});

const SettingsDashboard = ({updatePassword, providerId}) => {
    return (
        <Grid>
            <Grid.Column width={12}>
                <Switch>
                    <Redirect exact from='/settings' to='/settings/basic' />
                    <Route path='/settings/basic' component={BasicPage} />
                    <Route path='/settings/about' component={AboutPage} />
                    <Route path='/settings/photos' component={PhotosPage} />
                    <Route
                        path='/settings/account'
                        render={() => <AccountPage updatePassword={updatePassword} providerId={providerId} />}
                    />
                </Switch>
            </Grid.Column>
            <Grid.Column width={4}>
                <SettingsNav />
            </Grid.Column>
        </Grid>
    );
};

export default connect(mapState, actions)(SettingsDashboard);
