import React, { useState } from 'react';

const questions = [
  
  'Will you give me all the cuddles?',
  'Will you give me all the kisses?',
  'Will you listen to all my bak bak?',
  'Will you take all my nakhra??',
  'Will you let me annoy you??',
  'Will you be mine forever?',
  'Yay!! I love you'

];

function App() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [started, setStarted] = useState(false);
  const [isSwapped, setIsSwapped] = useState(false);


  const handleStartClick = () => {
    setCurrentQuestionIndex(0);
    setStarted(true);
    //console.log(currentQuestionIndex)
  };

  const handleYesClick = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    //console.log(currentQuestionIndex);
  };

  const handleNoClick = () => {
    if(isSwapped  === false)
    setIsSwapped(true);
    else
    setIsSwapped(false);
  };

  const getGifUrl = (index) => {
    // Assuming your GIFs are named gif1.gif, gif2.gif, etc.
    return process.env.PUBLIC_URL + `/gifs/gif${index + 1}.gif`;
  };


  return (
  <>
  {started?(
    <>
    <div className='container'>
      <img src={getGifUrl(currentQuestionIndex- 1)} alt={`GIF for Question ${currentQuestionIndex }`} />
    </div>
    <div className='question'>
      <h1>{questions[currentQuestionIndex]}</h1>
    </div>
    <div className='buttondiv'>
      {currentQuestionIndex===6?( <h3>Happy valentines's Day</h3>):(
        <>
        {isSwapped?
        (<>
        <button className="nobutton" onClick={handleNoClick}>No</button>
        <button className="yesbutton" onClick={handleYesClick}>Yes</button>
        </>
        ):
        (
          <>
          <button className="yesbutton" onClick={handleYesClick}>Yes</button>
          <button className="nobutton" onClick={handleNoClick}>No</button>
          </>
        )}
        
        </>
      )}
    </div>
    </>
  ):
  (
    <>
    <div className='container'>
      <img src={`${process.env.PUBLIC_URL}/gifs/gif-1.gif`} alt="Happy valentines Day" />
    </div>
    <div className='question'>
      <h1>Let's start, you better not say no!! </h1>
    </div>
    <div className='buttondiv'>
      <button className='startbutton' onClick={handleStartClick}>Start</button>
    </div>
    </>
  )}

  

  

  </>
  );
}

export default App;
