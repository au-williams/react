import React, {Component} from 'react';
import parse from 'html-react-parser';

export default class Section extends Component {
  render() {
    const className = this.props.animate ? 'fade' : '';

    return (
      <section
          className={className}
          onAnimationEnd={this.props.onAnimationEnd}>
          {this.props.content.map(c =>
              <p>{parse(c)}</p>
          )}
      </section>
    )
  }
}