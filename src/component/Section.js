import React from 'react';
import parse from 'html-react-parser';

export default function Section(props) {
  const { animate, content, onAnimationEnd } = props;
  const className = animate ? 'fade' : '';

  return (
    <section
        className={className}
        onAnimationEnd={onAnimationEnd}>
        {content.map(c => <p>{parse(c)}</p>)}
    </section>
  );
}
