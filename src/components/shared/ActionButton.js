import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 190px;
    height: 50px;
    @media (max-width: 768px) {
      width: 120px;
      margin-bottom: 20px;  
    }
    border: 1px solid #707070;
    border-radius: 25px;
    font-size: 1rem;
    outline: none;
    margin-right: ${(props) => (props.mr ? '20px' : '0px')};
    cursor: pointer;

    &&.forward {
        background-image: linear-gradient(#4734e1, #8e27ea);
        color: #fff;
    }
    &&.backward {
        background-color: #fff;
        color: #000;
    }
    &&:active {
        opacity: 0.75;
    }
`;

export default function ActionButton({ children, ...props }) {
    return (
        <Button
            className={props.action === 'forward' ? 'forward' : 'backward'}
            {...props}
        >
            {children}
        </Button>
    );
}
