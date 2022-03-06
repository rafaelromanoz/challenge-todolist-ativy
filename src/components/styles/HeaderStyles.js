import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

const Title = styled.h1`

`;

const ContainerInputAndButton = styled.div`
  display: flex;
`;

const LabelInput = styled.label`
  align-self: center;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  display: block;
  align-self: flex-start;
  border: 1px solid #ccc;
  width: 20rem;
  margin: 6px;
  padding: 0.8rem;
  border-radius: 4px;
  background: #eee;
  transition: 0.2s;
  &:focus {
    outline: none;
    border-color: #adf;
  }
`;

const ButtonHeader = styled.button`
  font-size: 1.2rem;  
  align-self: inherit;
  &:active {
    box-shadow: 0 0 0 3px #19f 0 0 0 4px #19f;
  }
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;

export {
  HeaderContainer,
  Title,
  LabelInput,
  Input,
  ButtonHeader,
  ContainerInputAndButton,
};
