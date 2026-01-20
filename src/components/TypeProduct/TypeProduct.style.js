import styled from 'styled-components';

export const WrapperTypeProductItem = styled.div`
  font-size: 13px;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  background-color: ${props => props.isActive ? '#1890ff' : 'transparent'};
  color: ${props => props.isActive ? 'white' : 'black'};

  &:hover {
    background-color: ${props => props.isActive ? '#1890ff' : '#f0f0f0'};
  }
`;