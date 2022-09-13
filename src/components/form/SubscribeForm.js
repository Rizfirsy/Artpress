import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../button/Button";
import styles from "./SubscribeForm.module.css";

export default function SusbcribeForm() {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Can't more than 20 characters")
          .required("Required!!"),
        lastName: Yup.string()
          .max(20, "Can't more than 20 characters")
          .required("Required!!"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Required!!"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <form className={styles.form} onSubmit={formik.handleSubmitd}>
          <label htmlFor="firstName">Firstname</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
          <label htmlFor="lastName">Lastname</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            {...formik.getFieldProps("lastName")}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <Button type="submit" text="Subsribe" />
        </form>
      )}
    </Formik>
  );
}
