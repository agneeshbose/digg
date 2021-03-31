import React from 'react';
import styled from 'styled-components';
import startCase from 'lodash/startCase';
import pick from 'lodash/pick';

import ProgressBar from './shared/ProgressBar';
import Questionnare from './shared/Questionnare.json';
import ActionButton from './shared/ActionButton';

const SectionWrapper = styled.div`
    padding: 10px;
    background-color: #f3f3f3;
    font-size: 1.125rem;
    margin-bottom: 20px;
    width: 100%;
`;

const ProfileDetails = styled.div`
    display: flex;
    font-size: 1rem;
    margin-top: 10px;
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

const ProfileItem = styled.span`
    padding: 20px 0px;
    margin-right: 20px;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Header = styled.div`
    display: flex;
`;

const Actions = styled.div`
    display: flex;
`;

export default function CompleteApplication(props) {
    const { profileInfo } = props.data;
    const { page1, page2, page3, page4, page5, page6, page7 } = Questionnare;

    const questions = [
        ...page1,
        ...page2,
        ...page3,
        ...page4,
        ...page5,
        ...page6,
        ...page7,
    ];

    const nationalityOptions = {
        1: 'United Arab Emirates',
        2: 'Others',
    };

    const handleSubmit = () => {
        localStorage.setItem(
            'application',
            JSON.stringify(pick(props.data, ['profileInfo', 'questionnare']))
        );
        alert('Application date stored in localStorage!');
    };

    return (
        <div>
            <Header>
                <h1 style={{ marginRight: '50px' }}>digg</h1>
                <ProgressBar page={props.page} />
            </Header>
            <br />
            <p>Complete - Review your application</p>
            <br />
            <SectionWrapper>
                <span style={{ color: 'blue' }}>Basic information</span>
                <br />
                <ProfileDetails>
                    {Object.keys(profileInfo).map((key) => {
                        let value = [
                            'nationality',
                            'countryOfResidence',
                        ].includes(key)
                            ? nationalityOptions[profileInfo[key]]
                            : profileInfo[key];
                        return (
                            <ProfileItem key={key}>
                                {startCase(key)} : {value}
                            </ProfileItem>
                        );
                    })}
                </ProfileDetails>
            </SectionWrapper>
            <SectionWrapper>
                <span style={{ color: 'blue' }}>Questionnare</span>
                <br />
                {questions.map((item) => {
                    const answerIndex = props.data.questionnare[item.id];
                    const answers = [];

                    if (Array.isArray(answerIndex)) {
                        for (let index of answerIndex) {
                            answers.push(item.options[index]);
                        }
                    } else {
                        answers.push(item.options[answerIndex]);
                    }

                    return (
                        <>
                            <h4>{item.question}</h4>
                            {answers.map((answer) => {
                                return (
                                    <ActionButton
                                        action="forward"
                                        mr={true}
                                        disabled={true}
                                    >
                                        {answer && answer.label}
                                    </ActionButton>
                                );
                            })}
                        </>
                    );
                })}
            </SectionWrapper>
            <br />
            <br />
            <Actions>
                <ActionButton
                    action="backward"
                    onClick={() => props.handlePageChange('backward')}
                    mr={true}
                >
                    Back
                </ActionButton>
                <ActionButton action="forward" onClick={handleSubmit}>
                    Complete Application
                </ActionButton>
            </Actions>
        </div>
    );
}
