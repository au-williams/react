import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    const nextText = this.props.content[0];
    const backText = this.props.content[1];

    return (
      <footer>
        {backText &&
          <button onClick={this.props.navigateBack}>
            <span className='bump-left'>←</span> {backText}
          </button>
        }
        {backText && nextText &&
          <span> </span>
        }
        {nextText &&
          <button onClick={this.props.navigateNext}>
            {nextText} <span className='bump-right'>→</span>
          </button>
        }
      </footer>
    )
  }
}