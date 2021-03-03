import styled from "styled-components";

export const StyledWrapper = styled.div`
  background-image: url(${(props) => props.navbarImage});
  height: 300px;
  background-repeat: no-repeat;
  background-position: 80% 48%;
  background-size: cover;
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-top: -100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
`;
export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
export const ContactContentWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.pink};
  border-radius: 5px;
  display: flex;
  width: 90%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ContactImageWrapper = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.darkPink};
`;

export const ContactImage = styled.div`
  background-image: url(${(props) => props.image});
  height: 100%;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  h2 {
    margin-right: 20px;
    color: ${({ theme }) => theme.colors.lightYellow};
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const FormTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkPink};
  margin: 40px 0 40px;
  text-align: center;
`;
export const ContactForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FieldWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 100%;
  justify-content: center;
`;

export const FormContent = styled.div`
  margin: 10px;
  width: 90%;
`;
export const TextareaWrapper = styled.div`
  width: 80%;
`;

export const Textarea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.pink};
  border-radius: 5px;
  resize: none;
  width: 100%;
  height: 100px;
`;

export const ErrorWrapper = styled.div`
  color: crimson;
  font-size: 13px;
  margin-top: 10px;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;