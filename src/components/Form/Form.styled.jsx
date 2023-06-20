import { Form, Field } from 'formik';
import styled from '@emotion/styled';

export const MainForm = styled(Form)`
  position: relative;
  max-width: 300px;
  padding: 20px;
  border: ${props => `1px solid ${props.theme.colors.black}`};
  border-radius: 4px;
`;

export const Label = styled.label`
  display: block;
  font-size: 18px;
`;
export const ErrorText = styled.p`
  color: red;
`;

export const InputName = styled(Field)`
  margin-bottom: 10px;
`;
export const InputNumber = styled(Field)``;
