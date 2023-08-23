import React from 'react'

const Questions = ({ questions }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        
      })}
    </section>
  );
};

export default Questions

// - S7-191:Cr8 question component base
// - S7-191:Add parameter questions
// - S7-191:Add section with className contianer & h1 Questions
// - S7-191:Iterate over question parameter/prop. Call map since its array
// - S7-191:Add question as prop/parameter