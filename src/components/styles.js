import styled from "styled-components";
export const Button = styled.button`
  width: 95px;
  height: 40px;
  border: none;
  font-size: 14px;
  border-radius: 6px;
  color: var(--header-btn-color);
  background-color: var(--bg-btn-color);
`;

export const Div = styled.div`
  text-align: center;
  width: 90%;
  margin: 0 auto;
`;

export const ContentDiv = styled.div`
  width: 45%;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;
export const Generalwidth = styled.div`
  width: 90%;
  margin: 0 auto;
`;
export const GreenBg = styled.div`
  background-color: var(--carosel-bg);
  position: relative;
`;

export const NewGreen = styled.div`
  background-color: var(--carosel-bg);
  padding: 10px 0 20px;
  position: relative;
`;
export const Tabbutton = styled.button`
  padding: 5px 15px;
  border-radius: 4px;
  font-size: 13px;
`;

export const CardComponent = styled.div`
  // height: 40vh;
`;

export const Box = styled.div`
  max-width: 200%;
  margin-right: 20px;
  // background: rgba(241, 241, 241, 0.3);
  // background-color:red;
`;

export const Virtual = styled.button`
  padding: 7px 25px;
  font-size: 12px;
  border: 5px;
  border-radius: 5px;
  text-transform: capitalize;
  background-color: rgba(217, 255, 242, 1);
`;
