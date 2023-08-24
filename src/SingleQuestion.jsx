import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return <article className='question'>
    <header>
      <h5>{title}</h5>
    </header>
    <p>{info}</p>
  </article>
};

export default SingleQuestion;

// - S7-191:Cr8 SingleQuestion component base
// - S7-191:Import AiOutlineMinus & AiOutlinePlus
// - S7-191:Cr8 state value showInfo
// - S7-191:Destructure with title & info
// - S7-191:Add article with className question
// - S7-191:Add header with pass in title inside h5
// - S7-191:Add info with pass in info
