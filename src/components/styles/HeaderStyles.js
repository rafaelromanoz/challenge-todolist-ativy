import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

const Title = styled.h1`
  color: #e5e5e5;
  font-family: Roboto;
`;

const ContainerInputAndButton = styled.div`
  display: flex;
`;

const LabelInput = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  margin-left: 2rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;
  transform: translateY(0rem);
`;

const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  color: #ffff;
  font-size: 1.2rem;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  border-radius: 0.2rem;
  background-color: #373943;
  border: none;
  width: 90%;
  height: 10px;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
`;
// https://getcssscan.com/css-buttons-examples
const ButtonHeader = styled.div`
  margin-left: 45px;
  width: 50px;
  margin-top: 10px;
  align-self: center;
`;

export {
  HeaderContainer,
  Title,
  LabelInput,
  Input,
  ButtonHeader,
  ContainerInputAndButton,
};
