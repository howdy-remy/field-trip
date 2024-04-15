import Button from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Form, AuthHeader, Wrapper } from "./Auth.styles";

export const Login = () => {
  console.log("stuff here");
  return (
    <>
      <Header withoutLinks />
      <Wrapper>
        <Form>
          <AuthHeader>Log in</AuthHeader>
          <Input label="Preferred name" id="name" placeholder="name" />
          <Input label="Email Address" id="email" placeholder="email" />
          <Input
            label="Password"
            id="password"
            placeholder="password"
            type="password"
          />
          <Button $variant="primary">Log in</Button>
        </Form>
      </Wrapper>
    </>
  );
};
