import React from 'react';

export default function Footer(props) {
  const { content, navigateBack, navigateNext } = props;
  const [ nextText, backText ] = content;

  return (
    <footer>
      {backText &&
        <button onClick={navigateBack}>
          <span className='bump-left'>←</span> {backText}
        </button>
      }
      {backText && nextText &&
        <span> </span>
      }
      {nextText &&
        <button onClick={navigateNext}>
          {nextText} <span className='bump-right'>→</span>
        </button>
      }
    </footer>
  );
}
