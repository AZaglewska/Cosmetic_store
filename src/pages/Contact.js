import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import navbarImage from "../assets/navbarImages/navbarImage4.jpg";
import formImage from "../assets/contactImage/contactImage.jpg";
import Button from "../components/atoms/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import {
  ThemeProvider,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import {
  StyledWrapper,
  ContactWrapper,
  ContactContentWrapper,
  ContactImageWrapper,
  ContactImage,
  FormTitle,
  ContactForm,
  FieldWrapper,
  FormContent,
  TextareaWrapper,
  Textarea,
  ErrorWrapper,
  ButtonWrapper,
} from "./stylesPages/ContactStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "90%",
    },

    spinner: {
      Background: "red",
    },
  },
}));

const Contact = () => {
  const [successAlert, setSuccessAlert] = useState();
  const [loadingAlert, setLoadingAlert] = useState(false);
  const [messageValue, setMessageValue] = useState("");
  const [messageError, setMessageError] = useState("");
  const classes = useStyles();

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "#ECCADA",
      },
      "& .MuiInput-underline:before": {
        borderBottomColor: "#ECCADA",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#ECCADA",
      },

      "& .MuiTextField-root": {
        "& fieldset": {
          borderColor: "#ECCADA",
        },
        "&:hover fieldset": {
          borderColor: "#ECCADA",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#ECCADA",
        },
      },

      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#ECCADA",
        },
        "&:hover fieldset": {
          borderColor: "#ECCADA",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#ECCADA",
        },
      },
    },
  })(TextField);

  const handleMessageValueChange = (e) => {
    setMessageValue(e.target.value);
  };

  const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .required("The first name cannot be empty")
      .trim()
      .min(2, "First name is too short"),

    lastName: Yup.string()
      .required("Last Name cannot be empty")
      .trim()
      .min(2, "Last Name is too short"),
    email: Yup.string()
      .required("Email cannot be empty")
      .email("Please enter a valid email address"),

    subject: Yup.string().required("Subject cannot be empty"),

    message: Yup.string()
      .required("The message cannot be empty")
      .min(10, "The message is too short"),
  });

  return (
    <ThemeProvider>
      <StyledWrapper navbarImage={navbarImage}></StyledWrapper>
      <ContactWrapper>
        <ContactContentWrapper>
          <ContactImageWrapper>
            <ContactImage image={formImage}>
              <h2>We'd love to hear from you</h2>
            </ContactImage>
          </ContactImageWrapper>
          <ContactForm>
            <div>
              <Formik
                initialValues={{
                  name: "",
                  lastName: "",
                  email: "",
                  subject: "",
                  message: "",
                }}
                validationSchema={ValidationSchema}
                onSubmit={(values, { setSubmitting, resetForm }, e) => {
                  if (messageValue.length >= 10) {
                    setLoadingAlert(true);
                    setMessageError("");

                    const valuesToSend = {
                      ...values,
                      message: messageValue,
                    };
                    emailjs
                      .send(
                        // "service_aqikqs1",
                        // "template_a4jkl4n",
                        valuesToSend,
                        // "user_McqZXvfPswihAT2SeiePt"
                        process.env.REACT_APP_EMAILJS_SERVICE,
                        process.env.REACT_APP_EMAILJS_TEMPLATE,
                        process.env.REACT_APP_EMAILJS_USER
                      )
                      .then(
                        (result) => {
                          console.log(result.text);
                          setSuccessAlert("Success");
                          setLoadingAlert(false);
                          resetForm();
                          setMessageValue("");
                        },
                        (error) => {
                          console.log(error.text);
                        }
                      );
                  } else {
                    setMessageError(
                      "Message cannot be empty and must have atleast 10 characters"
                    );
                  }
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => {
                  return (
                    <Form className={classes.root}>
                      <FormTitle>Contact Us</FormTitle>
                      <FieldWrapper>
                        <FormContent>
                          <CssTextField
                            className={classes.textField}
                            variant="outlined"
                            id="custom-css-standard-input"
                            label="Name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={
                              errors.name && touched.name && errors.name
                            }
                            error={errors.name && touched.name}
                          />
                        </FormContent>
                        <FormContent>
                          <CssTextField
                            label="Last Name"
                            name="lastName"
                            variant="outlined"
                            id="custom-css-standard-input"
                            className={classes.textField}
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={
                              errors.lastName &&
                              touched.lastName &&
                              errors.lastName
                            }
                            error={errors.lastName && touched.lastName}
                            margin="normal"
                          />
                        </FormContent>
                      </FieldWrapper>
                      <FieldWrapper>
                        <FormContent>
                          <CssTextField
                            label="Email"
                            name="email"
                            variant="outlined"
                            id="custom-css-standard-input"
                            className={classes.textField}
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={
                              errors.email && touched.email && errors.email
                            }
                            error={errors.email && touched.email}
                            margin="normal"
                          />
                        </FormContent>
                        <FormContent>
                          <CssTextField
                            label="Subject"
                            name="subject"
                            variant="outlined"
                            id="custom-css-standard-input"
                            className={classes.textField}
                            value={values.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={
                              errors.subject &&
                              touched.subject &&
                              errors.subject
                            }
                            error={errors.subject && touched.subject}
                            margin="normal"
                          />
                        </FormContent>
                      </FieldWrapper>
                      <FieldWrapper>
                        <TextareaWrapper>
                          <Textarea
                            type="text"
                            name="message"
                            id="message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                            as="textarea"
                            placeholder="Message..."
                          />
                          <ErrorWrapper>
                            <ErrorMessage name="message" />
                          </ErrorWrapper>
                        </TextareaWrapper>
                      </FieldWrapper>
                      <ButtonWrapper>
                        <Button
                          styleType="pinkCartButton"
                          buttonType="submit"
                          disabled={isSubmitting}
                          form
                        >
                          {loadingAlert ? (
                            <CircularProgress className={classes.spinner} />
                          ) : (
                            "Send"
                          )}
                        </Button>

                        {successAlert === "Success" ? (
                          <p>The message was sent</p>
                        ) : null}
                      </ButtonWrapper>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </ContactForm>
        </ContactContentWrapper>
      </ContactWrapper>
    </ThemeProvider>
  );
};

export default Contact;
