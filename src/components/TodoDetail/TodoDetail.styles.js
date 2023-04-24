import styled from "styled-components";

export const TodoDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem; // 패딩 값을 조정해주세요
  border: 1px solid #38a169;
  border-radius: 4px;
  background-color: transparent;
  max-width: 1500px; // 최대 너비 값을 조정해주세요
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TodoDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TodoId = styled.span`
  font-size: 0.7rem; // id의 글씨 크기를 조정해주세요
  color: #000;
  position: absolute;
  left: 1rem;
  top: 0.5rem;
`;

export const TodoDetailContent = styled.div`
  width: 100%;
`;

export const TodoDetailHeading = styled.h2`
  margin-bottom: 1rem;
`;

export const TodoDetailBody = styled.p``;

export const BackButton = styled.button`
  margin-bottom: 1rem;
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border: none;
  background-color: #f8f9fa;
  color: #495057;
  cursor: pointer;
  border-radius: 4px;
  position: absolute;
  right: 1rem;
  top: 0.5rem; // 간격을 조정해주세요
`;