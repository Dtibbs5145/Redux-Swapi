import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getChars } from '../actions/index';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getChars();
  }

  render() {
    if (this.props.fetching) {
      <div>
        <h2>Loading</h2>
      </div>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.charsReducer.isFetching,
  error: state.charsReducer.error,
  characters: state.charsReducer.characters
})

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {getChars}
)(CharacterListView);
 