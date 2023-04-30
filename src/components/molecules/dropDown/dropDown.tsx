import {
  StyledDropDown,
  DropDownMenu,
  FormLayout,
  LittleFormContainer,
} from "./dropDownStyle";
import { DropDownType } from "./dropDownType";
import { Input, Button } from "src/components/atoms";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";

const DropDownContainer: React.FC<DropDownType> = (props: DropDownType) => {
  return (
    <>
      {props.type == "form" ? (
        <LittleForm id={props.id} />
      ) : (
        <DefaultDropDown menu={props.children} />
      )}
    </>
  );
};

const LittleForm = (id: any) => {
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const SubmitPassword = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    let targetComment = {
      _id: id.id,
      password: password,
    };

    let response = await fetch("/api/comments", {
      method: "DELETE",
      body: JSON.stringify(targetComment),
    });

    let responseData = await response.json();

    if (responseData.success) {
      setPassword("");
      alert("댓글삭제 완료");
      router.replace(router.asPath);
    } else {
      alert(responseData.message);
    }
  };

  return (
    <LittleFormContainer>
      <FormLayout>
        <Input
          placeholder="password"
          type="password"
          size="small"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <Button color="base" ButtonType="small" onClick={SubmitPassword}>
          확인
        </Button>
      </FormLayout>
    </LittleFormContainer>
  );
};

const DefaultDropDown = (menu: any) => {
  return (
    <StyledDropDown>
      {menu &&
        menu.map((item: string, i: number) => {
          return (
            <DropDownMenu key={i} onClick={null}>
              {item}
            </DropDownMenu>
          );
        })}
    </StyledDropDown>
  );
};

export default DropDownContainer;
