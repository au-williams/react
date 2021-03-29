import './App.css';
import Content from './Content';
import Footer  from './Footer';
import Section from './Section';
import React, { Component } from 'react';

class App extends Component {
  state = {
    animate: true,
    index: 0
  };

  navigateBack = () => {
    this.setState({
      animate: true,
      index: this.state.index - 1
    });
  };

  navigateNext = () => {
    const isLastPage = this.state.index === Content.length - 1;

    this.setState({
      animate: true,
      index: isLastPage ? 0 : this.state.index + 1
    })
  };

  render() {
    const { animate, index } = this.state;
    const { sectionContent, footerContent } = Content[index];

    return (
      <main>
        <Section
          animate={animate}
          content={sectionContent}
          onAnimationEnd={() => {
            this.setState({animate: false});
          }}
        />
        <Footer
          content={footerContent}
          navigateBack={this.navigateBack}
          navigateNext={this.navigateNext}
        />
      </main>
    );
  };
}

export default App;
