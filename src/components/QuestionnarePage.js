import React from 'react';
import styled from 'styled-components';

import ActionButton from './shared/ActionButton';
import MultipleChoiceQuesion from './questionnarePage/MultipleChoiceQuestion';
import Questionnare from './shared/Questionnare.json';
import ProgressBar from './shared/ProgressBar';

const Header = styled.div`
    display: flex;
`;

export default function QuestionnarePage({
    questionnare,
    handlePageChange,
    handleQuestionnareChange,
    page,
}) {
    return (
        <div>
            <Header>
                <h1 style={{ marginRight: '50px' }}>digg</h1>
                <ProgressBar page={page} />
            </Header>

            <br />
            {Questionnare[`page${page}`].map(
                ({ question, options, type, id }, index) => (
                    <React.Fragment key={index}>
                        <MultipleChoiceQuesion
                            question={question}
                            options={options}
                            type={type}
                            id={id}
                            value={questionnare[id]}
                            handleQuestionnareChange={handleQuestionnareChange}
                        />
                    </React.Fragment>
                )
            )}
            <br />
            <br />
            <ActionButton
                action="backward"
                onClick={() => handlePageChange('backward')}
                mr={true}
            >
                Back
            </ActionButton>
            <ActionButton
                action="forward"
                onClick={() => handlePageChange('forward')}
            >
                Next
            </ActionButton>
        </div>
    );
}
