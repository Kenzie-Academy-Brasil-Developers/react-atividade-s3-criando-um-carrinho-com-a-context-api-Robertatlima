import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const List = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 120px;
  padding: 10px;
  width: 90%;
  margin: 0 auto;
  border: 2px solid darkblue;
  background-color: #0080cc;
  color: white;
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
  }
`;
