
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import AppBar from 'components/AppBar';
import Form from 'components/Form';
import { LOAD_DATA, TAB_CLICKED, ACTIVATE_TAB } from './constants';
import { selectCategories, selectActiveTab } from './selectors';
import Banner from './dog1.jpg';

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
          activeTab={this.props.activeTab.toJS()}
        />
        <Form noTopMargin mainPage>
          {React.Children.toArray(this.props.children).length === 0
            ? <div>
              <h2>
                Vítejte. Stránky jsou zatím ve výstavbě
              </h2>
              <p>
                Kategorie Projekty a IT projekty jsou aktivní.
              </p>
              <img src={Banner} alt="banner" />
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
    activateTab: (route) => dispatch({ type: ACTIVATE_TAB, route }),
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
