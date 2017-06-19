import React from 'react';
import Formsy from 'formsy-react';
import ParentContextMixin from './mixins/parent-context';

export default React.createClass({

    mixins: [ParentContextMixin],

    propTypes: {
        children: React.PropTypes.node
    },

    render() {
        return (
            <Formsy.Form
                className={this.getLayoutClassName()}
                {...this.props}
                ref="formsy"
            >
                {this.props.children}
            </Formsy.Form>
        );
    }

});