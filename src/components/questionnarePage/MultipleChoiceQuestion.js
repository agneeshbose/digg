import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
    background-color: #efefef;
    border-radius: 20px;
    padding: 15px 40px;
    margin-right: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    &&.active {
        background-color: #e2cccc;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default function MultipleChoiceQuestion({
    question,
    options,
    type,
    value,
    id,
    handleQuestionnareChange,
}) {
    const handleClick = (index) => {
        let activeItems = value;

        if (type === 'checkbox') {
            if (!activeItems.includes(index)) {
                activeItems.push(index);
            } else {
                let itemIndex = activeItems.indexOf(index);

                if (itemIndex > -1) {
                    activeItems.splice(itemIndex, 1);
                }
            }
        }

        handleQuestionnareChange(id, type === 'radio' ? index : activeItems);
    };

    return (
        <div>
            <h3>{question}</h3>
            <br />
            <FlexContainer>
                {options.map((option, index) => (
                    <StyledSpan
                        key={option.label}
                        className={
                            type === 'radio'
                                ? value === index
                                    ? 'active'
                                    : ''
                                : value.includes(index)
                                ? 'active'
                                : ''
                        }
                        onClick={(e) => {
                            handleClick(index);
                        }}
                    >
                        {option.label}
                    </StyledSpan>
                ))}
            </FlexContainer>
        </div>
    );
}
