import React, { useState } from "react";

function QuestionAndAnswer(props) {
  const [question, displayQuestion] = useState(false);

  const showAnswer = () => {
    displayQuestion(!question);
  };

  return (
    <div className="quaAns">
      <div className="faqTop">
        <div><h2>{props.question}</h2></div>
        <div><button onClick={showAnswer}><i class="bi bi-arrow-down-short"></i></button></div>
      </div>
      <div className="faqBottom">
        {question && (
          <div><p>{props.answer}</p></div>
        )}
        
      </div>
      <hr></hr>
    </div>
  );
}

export default QuestionAndAnswer