import React from 'react';

class Text extends React.Component {

    render() {
        const { text } = (this.props) ? this.props : null;
        const { textId } = (this.props) ? this.props : 'h1_text_id';

        return (
            <div>
                <h1 id={ textId }>{text}</h1>
            </div>
        );
    }
}

export default Text;
