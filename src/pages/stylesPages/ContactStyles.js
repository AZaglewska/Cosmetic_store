import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

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
  outline: none;
  transition: 1s ease;
  &:focus {
    border: 3px solid ${({ theme }) => theme.colors.pink};
  }
`;

export const ErrorWrapper = styled.div`
  color: #f44336;
  font-size: 13px;
  margin-top: 10px;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const SuccessText = styled.p`
  color: green;
  border: 1px dotted green;
  text-align: center;
  padding: 15px 10px;
  margin-top: 15px;
`;

export const ErrorText = styled.p`
  color: #f44336;
  border: 1px dotted #f44336;
  text-align: center;
  padding: 15px 10px;
  margin-top: 15px;
`;

//material styles

export const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "90%",
    },
  },
}));
