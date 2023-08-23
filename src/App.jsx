import { useState } from 'react';
import data from './data';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
}
export default App;

// - S7-191:Import useState & data
// - S7-191:Cr8 question state value
// - 