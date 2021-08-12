import React, {Component} from 'react';

class InputFilmList extends Component {
    // constructor(props) {
    //     super(props);
    // };



    render() {
        return (
            <form onSubmit={this.props.onInputFilm}>
                <input type="text"
                       value={this.props.onInput}
                       onChange={this.props.onChangeInput}
                />
                <button type="submit">add</button>
            </form>
        );
    }
}

export default InputFilmList;