import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  display: flex;
  align-items: center;

  .email {
    font-size: 18px;
    font-weight: bold;
    padding-right: 15px;
  }

  .logout-btn {
    color: black;
    border: 1px solid black;
    display: inline-block;
    padding: 10px;
    font-size: 15px;
    text-decoration: none;
    margin-right: 20px;
    border-radius: 10px;

    transition: all 0.3s;
  }
`;
