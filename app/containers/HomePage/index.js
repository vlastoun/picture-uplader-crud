
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import AppBar from 'components/AppBar';
import Form from 'components/Form';
import { LOAD_DATA, TAB_CLICKED } from './constants';
import { selectCategories, selectActiveTab } from './selectors';

class HomePage extends React.Component {
  componentWillMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div>
        <AppBar
          tabs={this.props.categories.toJS()}
          onTabClick={this.props.tabClicked}
          activeTab={this.props.activeTab}
        />
        <Form noTopMargin mainPage>
          {React.Children.toArray(this.props.children).length === 0
            ? <div>
              <h2>Vítejte</h2>
            </div>
            : React.Children.toArray(this.props.children)}
        </Form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch({ type: LOAD_DATA }),
    tabClicked: (id) => dispatch({ type: TAB_CLICKED, id }),
  };
}

const mapStateToProps = createStructuredSelector({
  categories: selectCategories(),
  activeTab: selectActiveTab(),
});

HomePage.propTypes = {
  children: PropTypes.node,
  fetchData: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  tabClicked: PropTypes.func.isRequired,
  activeTab: PropTypes.object,
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
