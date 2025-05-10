"use client";
import { Button } from "../ui/button";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import Code from "@tiptap/extension-code";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Blockquote from "@tiptap/extension-blockquote";
import CodeBlock from "@tiptap/extension-code-block";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import {
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaCode,
  FaFileCode,
  FaImage,
  FaItalic,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaStrikethrough,
  FaUnderline,
} from "react-icons/fa6";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({}),
      Heading.configure({ levels: [1, 2, 3] }),
      Bold,
      Italic,
      Underline,
      Strike,
      Code,
      Blockquote,
      CodeBlock,
      BulletList,
      OrderedList,
      ListItem,
      TextStyle,
      Color,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Image,
    ],
    content: "<p>Hello World! 🌎️</p>",
    editorProps: {
      attributes: {
        class:
          "prose prose-slate prose-sm prose-img:rounded-xl sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
  });

  if (!editor) return null;

  const buttonClass = (active: boolean) =>
    active
      ? "bg-blue-500 text-white border-blue-600"
      : "bg-white text-black border-gray-300";

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-wrap gap-2 border p-2 rounded">
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          size="sm"
          className={buttonClass(editor.isActive("heading", { level: 1 }))}
        >
          H1
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          size="sm"
          className={buttonClass(editor.isActive("heading", { level: 2 }))}
        >
          H2
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          size="sm"
          className={buttonClass(editor.isActive("heading", { level: 3 }))}
        >
          H3
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          size="sm"
          className={buttonClass(editor.isActive("bold"))}
        >
          <FaBold />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          size="sm"
          className={buttonClass(editor.isActive("italic"))}
        >
          <FaItalic />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          size="sm"
          className={buttonClass(editor.isActive("underline"))}
        >
          <FaUnderline />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          size="sm"
          className={buttonClass(editor.isActive("strike"))}
        >
          <FaStrikethrough />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleCode().run()}
          size="sm"
          className={buttonClass(editor.isActive("code"))}
        >
          <FaCode />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          size="sm"
          className={buttonClass(editor.isActive("codeBlock"))}
        >
          <FaFileCode />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          size="sm"
          className={buttonClass(editor.isActive("blockquote"))}
        >
          <FaQuoteLeft />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          size="sm"
          className={buttonClass(editor.isActive("bulletList"))}
        >
          <FaListUl />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          size="sm"
          className={buttonClass(editor.isActive("orderedList"))}
        >
          <FaListOl />
        </Button>
        <Button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          size="sm"
          className={buttonClass(editor.isActive({ textAlign: "left" }))}
        >
          <FaAlignLeft />
        </Button>
        <Button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          size="sm"
          className={buttonClass(editor.isActive({ textAlign: "center" }))}
        >
          <FaAlignCenter />
        </Button>
        <Button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          size="sm"
          className={buttonClass(editor.isActive({ textAlign: "right" }))}
        >
          <FaAlignRight />
        </Button>
        <Button
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          size="sm"
          className={buttonClass(editor.isActive({ textAlign: "justify" }))}
        >
          <FaAlignJustify />
        </Button>
        <Button
          onClick={() => {
            const url = prompt("Enter image URL:");
            if (url) editor.chain().focus().setImage({ src: url }).run();
          }}
          size="sm"
          className={buttonClass(editor.isActive("image"))}
        >
          <FaImage />
        </Button>
      </div>

      <EditorContent editor={editor} className="w-full border rounded p-4" />
    </div>
  );
};

export default Tiptap;
