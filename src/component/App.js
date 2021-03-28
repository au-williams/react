import './App.css';
import Content from './Content';
import Footer  from './Footer';
import Section from './Section';
import React, {Component} from 'react';

class App extends Component {
  state = {
    animate: true,
    index: 0
  };

  render() {
    const {sectionContent, footerContent} = Content[this.state.index];
    const isLastPage = this.state.index === Content.length - 1;

    const navigateBack = () => {
      this.setState({
        animate: true,
        index: this.state.index - 1
      });
    }

    const navigateNext = () => {
      this.setState({
        animate: true,
        index: isLastPage ? 0 : this.state.index + 1
      })
    };

    return (
      <main>
        <Section
          animate={this.state.animate}
          content={sectionContent}
          onAnimationEnd={() => {
            this.setState({animate: false });
          }}
        />
        <Footer
          content={footerContent}
          navigateBack={navigateBack}
          navigateNext={navigateNext}
        />
      </main>
    );
  }
}

export default App;
