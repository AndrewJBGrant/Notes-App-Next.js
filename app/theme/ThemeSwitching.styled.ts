import styled from "styled-components";

export const ThemeContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom:  ${({ theme }) => theme.colors.border};
  border-raduis: ;
`;
