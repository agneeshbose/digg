import React from 'react';
import styled from 'styled-components';
import LandingPage from './LandingPage';
import QuestionnarePage from './QuestionnarePage';
import CompleteApplication from './CompleteApplication';

const Container = styled.div`
    padding: 30px;
`;

export default function ApplyNow({
    handlePageChange,
    handleProfileInfoChange,
    handleQuestionnareChange,
    handleNavigateToPage,
    data,
}) {
    const renderPage = (page) => {
        switch (page) {
            case 0:
                return (
                    <LandingPage
                        profileInfo={data.profileInfo}
                        handlePageChange={handlePageChange}
                        handleProfileInfoChange={handleProfileInfoChange}
                    />
                );
            case 8:
                return (
                    <CompleteApplication
                        data={data}
                        page={page}
                        handlePageChange={handlePageChange}
                        handleNavigateToPage={handleNavigateToPage}
                    />
                );
            default:
                return (
                    <QuestionnarePage
                        handlePageChange={handlePageChange}
                        handleQuestionnareChange={handleQuestionnareChange}
                        questionnare={data.questionnare}
                        page={page}
                    />
                );
        }
    };
    return <Container>{renderPage(data.currentPage)}</Container>;
}
