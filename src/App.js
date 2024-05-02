import './App.css';
import sliderElements from './sliderElements';
import SlideElement from './SlideElement';
import { useState } from 'react';
function App() {

  const [slides, setSlides] = useState(sliderElements);
  const [showedSlidersPosition, setShowedSlidersPosition] = useState()
  const [moveLeft, setMoveLeft] = useState(false)
  const [moveRight, setMoveRight] = useState(true)

  const sliderOptions = {
    width: 200,
    gap: 20,
    step: 3

  }

  const slideLeft = () => {

    setSlides(slides => (slides.slice(2, slides.length)));
    console.log(slides);
    setSlides(slides => (slides.push([slides[0], slides[1]])));

  }
  const slideRight = () => {
    setSlides(slides => (slides.splice(slides.length, 1)))
    console.log(slides);
  }

  const handleClick = event => event.target.classList.add('click-state');

  return (
    <div className="App">
      <div className='slider-wrapper'>
        <button className='slider-btn btn-left' onClick={slideLeft}>&#8592;</button>
        <div className='slider'>
          {slides.map((item, index) => {
            return <SlideElement key={index} header={item.header} image={item.image} text={item.text} handleClick={handleClick} moveLeft={moveLeft} moveRight={moveRight} />
          })}
        </div>
        <button className='slider-btn btn-right' onClick={slideRight}> &#8594;</button>

      </div>

    </div >
  );
}

export default App;
