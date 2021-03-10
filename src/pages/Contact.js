import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import navbarImage from "../assets/navbarImages/navbarImage4.jpg";
import formImage from "../assets/contactImage/contactImage.jpg";
import Button from "../components/atoms/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
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
  SuccessText,
  ErrorText,
  ContactButtonWrapper,
  ContactIconSvg,
  useStyles,
} from "./stylesPages/ContactStyles";

const Contact = () => {
  const [successAlert, setSuccessAlert] = useState("");
  const [loadingAlert, setLoadingAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState("");

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
    <>
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
                onSubmit={(values, { resetForm }, e) => {
                  setLoadingAlert(true);

                  emailjs
                    .send(
                      process.env.REACT_APP_EMAILJS_SERVICE,
                      process.env.REACT_APP_EMAILJS_TEMPLATE,
                      values,
                      process.env.REACT_APP_EMAILJS_USER
                    )
                    .then((result) => {
                      console.log(result.text);
                      setSuccessAlert("Success");
                      setLoadingAlert(false);
                      resetForm();
                    })
                    .then(() => {
                      setTimeout(() => {
                        setSuccessAlert("");
                      }, 4000);
                    })
                    .catch((error) => {
                      console.log(error.text);
                      setErrorAlert("Error");
                    });
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
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
                          isForm
                        >
                          {loadingAlert ? (
                            <CircularProgress color="secondary" size={35} />
                          ) : (
                            <ContactButtonWrapper>
                              <ContactIconSvg viewBox="0 0 24 24">
                                <path d="m20.5 20c-.082 0-.164-.014-.242-.04l-19.75-6.75c-.284-.098-.482-.354-.506-.653-.022-.299.135-.583.4-.722l22.5-11.75c.251-.129.554-.109.782.054.23.164.349.442.308.722l-2.75 18.5c-.033.22-.162.414-.353.53-.118.072-.253.109-.389.109zm-17.854-7.645 17.244 5.894 2.401-16.152z" />
                                <path d="m9.5 23c-.078 0-.157-.012-.233-.037-.309-.102-.517-.389-.517-.713v-6.75c0-.189.072-.373.201-.512l13.75-14.75c.282-.304.759-.319 1.061-.037.303.282.319.757.037 1.061l-13.549 14.533v4.168l2.503-3.407c.245-.332.715-.406 1.049-.16.334.245.405.715.16 1.049l-3.857 5.25c-.145.195-.371.305-.605.305z" />
                              </ContactIconSvg>
                              <p>Send</p>
                            </ContactButtonWrapper>
                          )}
                        </Button>

                        {successAlert === "Success" ? (
                          <SuccessText>The message was sent</SuccessText>
                        ) : null}
                        {errorAlert === "Error" ? (
                          <ErrorText>This message wasn't sent</ErrorText>
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
    </>
  );
};

export default Contact;
