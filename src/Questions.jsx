import React from 'react'
import SingleQuestion from './SingleQuestion';

const Questions = ({ questions }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion key={question.id} {...question}></SingleQuestion>
        );
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
// - S7-191:Add return with pass in func SingleQuestion
// - S7-191:Import SingleQuestion