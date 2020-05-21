import React, { useState,useEffect } from "react";
import axios from 'axios'
import "./tag.css";

const TagInput = (value,onChange) => {
  const [tag, setTag] = useState([]);
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(
    'http://api.riyofirsan.com/users/findQuery?name=redux',
  );
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
 
      setTag(result.tag);
    };
 
    fetchData();
  }, [url]);
  
  const addTags = event => {
    if (event.key=="Enter" && event.target.value !== ""){
      setTag([...tag,event.target.value])
      event.target.value=""
    }
  }
  
  const removeTags = index =>{
    setTag([...tag.filter(tags=>tag.indexOf(tags) !== index)])
  }
  return (
    <div className="tags-input">
        <ul id="tags">
            {tag.map((tags, index) => (
                <li key={index} className="tag">
                    <span className='tag-title'>{tags}</span>
                    <span className='tag-close-icon'
                        onClick={() => removeTags(index)}
                    >
                        x
                    </span>
                </li>
            ))}
        </ul>
        <input
            type="text"
            onChange={event => setQuery(event.target.value)}
            onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
            placeholder="Press enter to add tags"
        />
    </div>
);
};

export default TagInput
