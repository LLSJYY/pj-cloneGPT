import styled from "styled-components";

export const FooterDiv = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  text-align: center;
  font-size: 0.5rem;
  color: rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.75rem;
    padding-bottom: 1.5rem;
    font-size: 0.75rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 2rem;
  }

  color: rgba(255, 255, 255, 0.5);
`;
