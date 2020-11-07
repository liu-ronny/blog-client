import { useState } from "react";

const useBlogPostForm = (blog) => {
  const [showPreviewText, setShowPreviewText] = useState(true);
  const [expand, setExpand] = useState(false);
  const [error, setError] = useState(false);

  const [tags, setTags] = useState(blog?.tags || []);
  const [saveAsDraft, setSaveAsDraft] = useState(blog?.hidden || false);
  const [body, setBody] = useState(blog?.body || "");

  const handleTagsChange = (event) => {
    let updatedTags = [...tags];
    const tag = event.target.value;
    const checked = event.target.checked;
    const tagInList = updatedTags.includes(tag);

    if (checked && !tagInList) {
      updatedTags.push(tag);
    } else if (!checked && tagInList) {
      updatedTags = updatedTags.filter((prevTag) => prevTag !== tag);
    }

    setTags(updatedTags);
  };

  const handleEditorChange = (content, editor) => {
    setBody(content);
  };

  return {
    showPreviewText,
    setShowPreviewText,
    expand,
    setExpand,
    tags,
    setTags,
    saveAsDraft,
    setSaveAsDraft,
    body,
    setBody,
    handleTagsChange,
    handleEditorChange,
    error,
    setError,
  };
};

export default useBlogPostForm;
