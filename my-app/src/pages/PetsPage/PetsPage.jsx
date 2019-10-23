import React from 'react';
import petsData from '../../data/db.json';
import PetList from '../../components/PetList/PetList';

export default class PetsPage extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.setState({
      items: petsData,
    });
  }
  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Available pets</h1>
        {items && <PetList items={items} />}
      </div>
    );
  }
}
