import dynamic from "next/dynamic";
import { EditorProps } from "./editorType";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

export const MDEditor = dynamic<EditorProps>(
  () => import("@uiw/react-md-editor"),
  {
    ssr: false,
  },
);
