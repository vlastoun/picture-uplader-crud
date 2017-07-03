import React from 'react';
import PropTypes from 'prop-types'; //eslint-disable-line
import PageTemplate from 'components/PageTemplate';
import CardItem from './CardItem';

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class AdminDashboard extends React.Component {
  render() {
    return (
      <PageTemplate heading="Dashboard">
        <CardItem text="Categories" link="/admin/categories" />
        <CardItem text="Posts" link="/admin/posts" />
        <CardItem text="Images" />
      </PageTemplate>
    );
  }
}

AdminDashboard.propTypes = {
};
export default AdminDashboard;
