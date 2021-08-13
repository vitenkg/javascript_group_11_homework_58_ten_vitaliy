import React, {Component} from 'react';

class DisplayListFilm extends Component {
    render() {
        return (
            <ul>
                {this.props.listFilm.map(list => (
                    <li key={list.id} style={{margin: '10px 0'}}>
                        <input
                            type="text"
                            value={list.film}
                            onChange={e => this.props.onChangeInput(list.id, e.target.value)}
                        />
                        <button type="button" onClick={() => this.props.onRemoveFilm(list.id)}>Remove</button>
                    </li>
                ))}

            </ul>
        );
    };
}

export default DisplayListFilm;