import './App.css';
import sliderElements from './sliderElements';
import SlideElement from './SlideElement';
import { useState } from 'react';
function App() {

  const [slides, setSlides] = useState(sliderElements);
  const [position, setPosition] = useState(0);

  const sliderOptions = {
    width: 200,
    gap: 20,
    step: 3,
    max: 7
  }

  const slideLeft = () => {
    if (position <= 0) {
      setPosition(position => position = 0);

    }
    else {
      setPosition(position => position - 3);

    }

  }
  const slideRight = () => {
    if (position >= slides.length + 1) {
      setPosition(position => position = slides.length);

    }
    else {
      setPosition(position => position + 3);

    }
  }

  console.log(position);

  return (
    <div className="App">
      <div className='slider-wrapper'>
        <button className='slider-btn btn-left' onClick={slideLeft} disabled={position === 0}>&#8592;</button>
        <div className='slider'>
          {[slides[position], slides[position + 1], slides[position + 2]].map((item, index) => {
            return <SlideElement key={index} header={item.header} image={item.image} text={item.text} />
          })}
        </div>
        <button className='slider-btn btn-right' onClick={slideRight} disabled={position === 6}> &#8594;</button>
      </div>

    </div >
  );
}

export default App;
