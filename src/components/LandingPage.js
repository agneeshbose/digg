import React from 'react';
import { Grid } from 'semantic-ui-react';

import LandingPageForm from './landingPage/LandingPageForm';

export default function LandingPage({
    handlePageChange,
    handleProfileInfoChange,
    profileInfo,
}) {
    let isMobile =
        Math.min(window.screen.width, window.screen.height) < 768 ||
        navigator.userAgent.indexOf('Mobi') > -1;
    return (
        <Grid>
            <Grid.Row columns={isMobile ? 1 : 2}>
                {!isMobile && <Grid.Column />}
                <Grid.Column>
                    <LandingPageForm
                        profileInfo={profileInfo}
                        handlePageChange={handlePageChange}
                        handleProfileInfoChange={handleProfileInfoChange}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}
