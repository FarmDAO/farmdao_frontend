import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from './SigninElements';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>FarmDAO</Icon>
          <FormContent>
            <Form action='/dashboard'>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password'  />
              <FormButton to="/dashboard">Continue</FormButton>
              
              <Text>Forgot password</Text>
              <Text>Please note this is for demo purposes. You can click continue now to have access to the app.</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
