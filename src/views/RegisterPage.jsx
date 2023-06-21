import { Formik, ErrorMessage, Field } from 'formik';
import {
  RegisterForm,
  Label,
  RegisterButton,
} from './StyleViews/ViewsPages.styled';
import * as yup from 'yup';
import { useRegisterMutation } from 'redux/authAPI';
import toast, { Toaster } from 'react-hot-toast';

export default function RegisterPage() {
  const [register, { isSuccess, isError }] = useRegisterMutation();

  const defaultInitialValues = {
    name: '',
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    register(values);
    resetForm();
  };

  const FormError = ({ name }) => {
    return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
  };

  return (
    <>
      {isSuccess && toast.success('Registration successful') && <Toaster />}
      {isError && toast.error('Something went wrong, try again later') && (
        <Toaster />
      )}
      <Formik
        initialValues={defaultInitialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <RegisterForm autoComplete="off">
          <Label htmlFor="name">Name</Label>
          <Field name="name" type="text" placeholder="Enter name" />
          <FormError name="name" />
          <Label htmlFor="email">Email</Label>
          <Field name="email" type="email" placeholder="Enter email" />
          <FormError name="email" />
          <Label htmlFor="password">Password</Label>
          <Field name="password" type="password" placeholder="Enter password" />
          <FormError name="password" />
          <RegisterButton type="submit"> Register</RegisterButton>
        </RegisterForm>
      </Formik>
    </>
  );
}
