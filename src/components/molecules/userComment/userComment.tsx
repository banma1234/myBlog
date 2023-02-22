import { StyledUserComment } from "./userCommentStyle";
import { ButtonLayout, FlexEndComponent } from "styles/globals";
import { Input, TextBox, Button } from "src/components/atoms";
import { useState } from "react";
import { useRouter } from "next/router";
import { UserCommentType } from "./userCommentType";
import parseDate from "util/parseDate";

const UserCommentComponent: React.FC<UserCommentType> = (
  props: UserCommentType,
) => {
  const [content, setContent] = useState("");
  const [writter, setWritter] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const initData = () => {
    setContent("");
    setWritter("");
    setPassword("");
    setError("");
  };

  const REF_handler = () => {
    if (props.data && props.data.length && props.type == "DEFAULT") {
      return props.data.slice(-1)[0].REF + 1;
    } else if (props.data && props.type == "REPLY") {
      return props.data.REF;
    } else {
      return 1;
    }
  };

  const RE_STEP_handler = () => {
    if (props.type == "DEFAULT") {
      return 0;
    } else if (props.data && props.type == "REPLY") {
      return props.data.RE_STEP + 1;
    }
  }

  const RE_LEVEL_handler = () => {
    if (props.type == "DEFAULT") {
      return 0;
    } else if (props.data && props.type == "REPLY") {
      return props.data.RE_LEVEL + 1;
    }
  };

  const handleComment = async (e: any) => {
    e.preventDefault();

    setError("");
    if (!content) return setError("댓글을 입력해주세요");

    let myHeaders = new Headers({});
    myHeaders.append("commentType", props.type);
    console.log("RE_LEVEL : ", props.data.RE_LEVEL);
    console.log("RE_STEP : ", props.data.RE_STEP);

    let comment = {
      REF: REF_handler(),
      RE_STEP: RE_STEP_handler(),
      RE_LEVEL: RE_LEVEL_handler(),
      date: parseDate(new Date()),
      writter,
      content,
      password,
      postName: props.postName,
    };

    console.log("commnetInfo : ", comment);
    
    let response = await fetch("/api/comments", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(comment),
    });

    let responseData = await response.json();

    if (responseData.success) {
      initData();
      alert("댓글등록 완료");
      router.replace(router.asPath);
    } else {
      alert(responseData.message);
      return setError(responseData.message);
    }
  };

  return (
    <StyledUserComment>
      <hr />
      <ButtonLayout>
        <Input
          size="small"
          placeholder="닉네임"
          value={writter}
          type="text"
          onChange={(e: any) => setWritter(e.target.value)}
        />
        <Input
          size="small"
          placeholder="비밀번호"
          value={password}
          type="password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
      </ButtonLayout>
      <TextBox
        placeholder="댓글 입력"
        value={content}
        onChange={(e: any) => setContent(e.target.value)}
      />
      <FlexEndComponent>
        <Button color="green" ButtonType="small" onClick={handleComment}>
          Submit
        </Button>
      </FlexEndComponent>
    </StyledUserComment>
  );
};

export default UserCommentComponent;
