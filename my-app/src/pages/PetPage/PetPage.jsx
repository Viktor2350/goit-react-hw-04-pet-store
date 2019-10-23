import React from 'react';
import PropTypes from 'prop-types';
import petsData from '../../data/db.json';
import Pet from '../../components/Pet/Pet';

export default class PetPage extends React.Component {
  state = {
    item: [],
  };

  componentDidMount() {
    const { match, history } = this.props;
    const getId = petsData.map(el => el.id);

    if (getId.includes(match.params.id)) {
      return this.setState({
        item: petsData.find(el => el.id === match.params.id),
      });
    }

    return history.push({
      pathname: '/pets',
    });
  }

  handleGoToBack = () => {
    const { history } = this.props;
    history.push('/pets');
  };

  render() {
    const { item } = this.state;
    return (
      <Pet
        name={item.name}
        age={item.age}
        breed={item.breed}
        gender={item.gender}
        color={item.color}
        image={item.image}
        description={item.description}
        handleGoToBack={this.handleGoToBack}
      />
    );
  }
}

PetPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};
