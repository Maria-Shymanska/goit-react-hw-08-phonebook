import { Formik, ErrorMessage, Field } from 'formik';
import {
  RegisterForm,
  Label,
  RegisterButton,
} from './StyleViews/ViewsPages.styled';
import * as yup from 'yup';
import { useLoginMutation } from 'redux/authAPI';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { getUsername } from 'redux/authSlice';

export default function LoginPage() {
  const [login, { isSuccess, isError }] = useLoginMutation();
  const UserName = useSelector(getUsername);

  const defaultInitialValues = {
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    login(values);
    resetForm();
  };

  const FormError = ({ name }) => {
    return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
  };

  return (
    <>
      {isSuccess && toast.success(`Welcome back, ${UserName}!`) && <Toaster />}
      {isError &&
        toast.error('Oops...Check entered email or password and try again') && (
          <Toaster />
        )}
      <Formik
        initialValues={defaultInitialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <RegisterForm autoComplete="off">
          <Label htmlFor="email">Email</Label>
          <Field name="email" type="email" placeholder="Enter email" />
          <FormError name="email" />
          <Label htmlFor="password">Password</Label>
          <Field name="password" type="password" placeholder="Enter password" />
          <FormError name="password" />
          <RegisterButton type="submit"> Login</RegisterButton>
        </RegisterForm>
      </Formik>
    </>
  );
}
