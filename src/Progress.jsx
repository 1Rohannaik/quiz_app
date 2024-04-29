import React from 'react'

const  Progress = ({index,length}) => {
  return (
    <header className="progress">
      <p>
        Question<strong>{index}</strong>/{length}
      </p>
    </header>
  );
}

export default Progress