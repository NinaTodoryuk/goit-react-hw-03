import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
  .min(3, "Too short!")
  .max(50, "Too long!")
  .required("Required"),
  number: Yup.string()
  .min(3, "Too short!")
  .max(50, "Too long!")
  .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, { resetForm }) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.container}>
        <div className={css.containerItem}>
          <div className={css.fieldContainer}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              className={css.input}
              name="name"
              type="text"
              id={nameFieldId}
            />

            <div className={css.errorMessage}>
              <ErrorMessage name="name" component="div" />
            </div>
          </div>

          <div className={css.fieldContainer}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              className={css.input}
              name="number"
              type="text"
              id={numberFieldId}
            />
            <div className={css.ErrorMessage}>
              <ErrorMessage name="number" component="div" />
              
            </div>
          </div>
        </div>

        <div className={css.buttonContainer}>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
