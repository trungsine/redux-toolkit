import { useState } from "react";
import "./makepost.css";
import Input from "../InputFields/Input";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";
const MakePost = (props) => {
    const {setOpen} = props
    const dispatch = useDispatch()
  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Add some descriptions");
  const [seclectedIdx, setSelectedIdx] = useState(0);
  const tags = ["NSFW", "Mood", "None", "Quotes", "Shitpost"];
  const handlepost = () => {
    setOpen(false)
    const newPost = {
        title : title, 
        description : desc,
        tag : seclectedIdx
    }
    dispatch(createPost(newPost));
  }
  return (
    <>
      <section className="makepost-container">
        <div className="makepost-navigation">
          <p className="makepost-save" onClick={handlepost}>Post</p>
        </div>
        <Input
          data={title}
          inputType="textarea"
          setData={setTitle}
          label="Title"
          classStyle="makepost-title"
        />
        <Input
          data={desc}
          inputType="textarea"
          setData={setDesc}
          label="Description"
          classStyle="makepost-desc"
        />
        <label htmlFor="">My Skills</label>
        <div className="makepost-tags">
          {tags.map((tag, idx) => {
            return (
              <button
                key={idx}
                className={`${
                  seclectedIdx === idx
                    ? `makepost-tags-selected`
                    : `makepost-tags-${tag}`
                }`}
                onClick={() => setSelectedIdx(idx)}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MakePost;
