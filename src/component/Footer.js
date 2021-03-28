import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    const {content, navigateBack, navigateNext} = this.props;
    const [nextText, backText] = content;

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
    )
  }
}