import styled from 'styled-components';
   
export const Box = styled.div`
<<<<<<< Updated upstream
  padding: 0px 60px;
  background: black;
  bottom: 0;
  width: 100%;
  height: 50px;
=======
  padding: 0px;
  background: black;
  background-color: black;
  position: center;
  bottom: 0;
  width: 0 auto;
  height: 0px;
>>>>>>> Stashed changes
   
  @media (max-width: 1000px) {
    padding: 0px 0px;
   
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: auto;
    margin: 0 auto;
    background-color: black;
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
<<<<<<< Updated upstream
=======
  width: 10000px;
>>>>>>> Stashed changes
`;
   
export const Row = styled.div`
  display: grid;
<<<<<<< Updated upstream
  align-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5%;
  margin-left: 5%;
=======
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 60px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
>>>>>>> Stashed changes
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  
   
  &:hover {
      color: yellow;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #f5c71a;
  margin-bottom: 40px;
  font-weight: bold;
  
`;