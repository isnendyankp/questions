import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return <article className='question'>

  </article>
};

export default SingleQuestion;

// - S7-191:Cr8 SingleQuestion component base
// - S7-191:Import AiOutlineMinus & AiOutlinePlus
// - S7-191:Cr8 state value showInfo
// - S7-191:Destructure with title & info
// - S7-191:Add article with className question
