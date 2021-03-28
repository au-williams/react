import React, {Component} from 'react';
import parse from 'html-react-parser';

export default class Section extends Component {
  render() {
    const {animate, content, onAnimationEnd} = this.props;
    const className = animate ? 'fade' : '';

    return (
      <section
          className={className}
          onAnimationEnd={onAnimationEnd}>
          {content.map(c => <p>{parse(c)}</p>)}
      </section>
    )
  }
}