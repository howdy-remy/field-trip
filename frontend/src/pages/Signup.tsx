import Button from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Form, AuthHeader, Wrapper } from "./Auth.styles";

export const Signup = () => {
  console.log("stuff here");
  return (
    <>
      <Header withoutLinks />
      <Wrapper>
        <Form>
          <AuthHeader>Sign up</AuthHeader>
          <Input label="Preferred name" id="name" placeholder="name" />
          <Input label="Email Address" id="email" placeholder="email" />
          <Input
            label="Password"
            id="password"
            placeholder="password"
            type="password"
          />
          <Button $variant="primary">Sign up</Button>
        </Form>
      </Wrapper>
    </>
  );
};
