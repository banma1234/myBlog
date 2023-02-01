import { Layout } from "src/components/organisms";
import { Editor } from "src/components/molecules";
import { Button } from "src/components/atoms";
import { useCallback, useState } from "react";

export default function Write() {
  const [value, setValue] = useState("");
  const handleChange = useCallback((value: any) => {
    setValue(value);
  }, []);

  return (
    <Layout>
      <Editor height={500} value={value} onChange={handleChange} />
      <Button ButtonType="small" color="green">
        Submit
      </Button>
    </Layout>
  );
}
