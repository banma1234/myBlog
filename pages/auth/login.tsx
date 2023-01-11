import { Button, Input } from "../../src/components/atoms";
import { Card } from "../../src/components/molecules";

export default function LogIn() {
  return (
    <>
      <Card color="gray" type="login">
        Login bitch~~
        <Input size="default" placeholder="e-mail" />
        <Input size="default" placeholder="password" />
        <Button color="green" type="login">
          Submit
        </Button>
        <Button color="high" type="login">
          Sign Up
        </Button>
        <Button color="pink" type="login">
          what the fxck is this?
        </Button>
        <Button color="low" type="login">
          stop
        </Button>
        <Button color="base" type="login">
          hold on
        </Button>
      </Card>
    </>
  );
}
