import React from 'react';
import DevSection from './DisplaySection.dev';
import ImagePlaceholder from '../../components/placeholders';
import guide from '../../components/placeholders/guide.md';
import MarkdownRenderer from 'react-markdown-renderer';


class PlaceholdersDev extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(

      <div>
        <DevSection label="Image Placeholder">
          <ImagePlaceholder />
        </DevSection>

        <div className="guide">
          <MarkdownRenderer markdown={guide} />
        </div>
      </div>

    );
  }
}

export default PlaceholdersDev;
