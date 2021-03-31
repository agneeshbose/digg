import React, { Component } from 'react';
import styled from 'styled-components';
import ApplyNow from './components/ApplyNow';

const Container = styled.div``;

export class App extends Component {
    state = {
        currentPage: 0,
        profileInfo: {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            gender: '',
            nationality: '',
            countryOfResidence: '',
            contactNumber: '',
            email: '',
        },
        questionnare: {
            1: '',
            2: '',
            3: '',
            4: [],
            5: [],
            6: [],
            7: '',
            8: [],
            9: [],
        },
    };

    handlePageChange = (value) => {
        let page = this.state.currentPage;

        if (value === 'forward' && page !== 8) {
            page = page + 1;
        }
        if (value === 'backward' && page !== 0) {
            page = page - 1;
        }

        this.setState({ currentPage: page });
    };

    handleProfileInfoChange = (profileInfo) => {
        this.setState({ profileInfo });
    };

    handleQuestionnareChange = (id, value) => {
        let questionnare = this.state.questionnare;
        this.setState({ questionnare: { ...questionnare, [id]: value } });
    };

    render() {
        return (
            <Container>
                <ApplyNow
                    data={this.state}
                    handlePageChange={this.handlePageChange}
                    handleProfileInfoChange={this.handleProfileInfoChange}
                    handleQuestionnareChange={this.handleQuestionnareChange}
                />
            </Container>
        );
    }
}

export default App;
