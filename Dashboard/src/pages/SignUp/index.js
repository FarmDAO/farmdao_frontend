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
} from './SignupElements';

const SignUp = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>FarmDAO</Icon>
          <FormContent>
            <Form action='/'>
              <FormH1>Sign up for your account</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput type='Name' />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' />
              <FormLabel htmlFor='for'>Phone Number</FormLabel>
              <FormInput type='phone' />
              <FormLabel htmlFor='for'>Adress</FormLabel>
              <FormInput type='adress' />
              <FormLabel htmlFor='for'>Website</FormLabel>
              <FormInput type='website' />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password'  />
              <FormButton >Continue</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
