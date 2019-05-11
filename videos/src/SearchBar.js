import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  render() {
    return (
      <div className="ui segment">
        <label className="label">Video Search:</label>
        <form
          className="ui form"
          onSubmit={event => {
            event.preventDefault();
            this.props.onSearchSubmit(this.state.term);
          }}
        >
          <input
            value={this.state.value}
            type="text"
            onChange={e =>
              this.setState({
                term: e.target.value
              })
            }
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
