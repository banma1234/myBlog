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
    setError("");
  };

  const checkLastComment = () => {
    if (props.data && props.data.length && props.type == "default") {
      return props.data.slice(-1)[0].REF + 1;
    } else if (props.data && props.type == "reply") {
      return props.data.REF;
    } else {
      return 1;
    }
  };

  // const checkCommentStep = () => {
  //   if (props.type == "reply" && props.data.RE_STEP == 0) {
  //     return props.data.RE_STEP + 1;
  //   } else if (props.type == "reply") {
  //     return props.data.RE_STEP;
  //   } else {
  //     return 0;
  //   }
  // }

  // const checkCommentLevel = () => {
  //   if (props.type == "reply") {
  //     return props.data.RE_STEP + 1;
  //   } else {
  //     return 0;
  //   }
  // }

  const handleComment = async (e: any) => {
    e.preventDefault();

    setError("");
    if (!content) return setError("댓글을 입력해주세요");

    let comment = {
      REF: checkLastComment(),
      RE_STEP: 0,
      RE_LEVEL: 0,
      date: parseDate(new Date()),
      writter,
      content,
      password,
      postName: props.data.post[0].title,
    };

    let response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify(comment),
    });

    let responseData = await response.json();

    if (responseData.success) {
      initData();
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
