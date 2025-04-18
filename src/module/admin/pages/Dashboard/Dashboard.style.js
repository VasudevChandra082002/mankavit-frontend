import theme from "../../../../theme/Theme";
import styled from "styled-components";


export const DashboardWrapper = styled.div`
// position: fixed;
// top:120px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    // height: 100vh;
    background-color: ${theme.colors.backgrounGrey};
    color: ${theme.colors.primary};
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-left: 40px;

    @media (max-width: 768px) {
      margin-left:0;
}
  `;


  export const DashboardContent = styled.div`

    display: flex;  
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 10px 0 ;
  `;
  export const Application = styled.div`
    display: grid;
    // flex-direction: row;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding-bottom: 10px ;
    gap: 20px;
  `;

  export const Courses = styled.div`
display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding-bottom: 10px;
    gap: 20px;
  `;