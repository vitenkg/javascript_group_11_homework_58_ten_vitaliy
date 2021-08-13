import React, {Component} from 'react';
import InputFilmList from "../../Components/InputFilmList/InputFilmList";
import DisplayListFilm from "../../Components/DisplayListFilm/DisplayListFilm";

class Notepad extends Component {
    state = {
        note: [{
            film: 'News Block',
            id: Math.random(),
        }],
        inputForm: '',
    };

    togglePostForm = e => {
        e.preventDefault();
        this.setState(prevState => (
            {
                note: [
                    ...prevState.note,
                    {
                        film: this.state.inputForm,
                        id: Math.random()
                    }]
            }));
        this.setState({inputForm: ''})
    };

    changeFilm = (id, value) => {
        this.setState({
            note: this.state.note.map(film => {
                if (id === film.id) {
                    return {
                        ...film,
                        film: value,
                    }
                }
                return film;
            })
        });
    };

    removeFilm = id => {this.setState({note: this.state.note.filter(film => film.id !== id)})};

    shouldComponentUpdate(nextState) {
        if (this.props.note !== nextState.note) {
            return true
        }
        return false;
    }

    render() {
        return (
            <div>
                <InputFilmList
                    onInputFilm={this.togglePostForm}
                    onInput={this.state.inputForm}
                    onChangeInput={e => this.setState({
                        inputForm: e.target.value
                    })
                    }
                />
                <DisplayListFilm
                    listFilm={this.state.note}
                    onChangeInput={this.changeFilm}
                    onRemoveFilm={this.removeFilm}
                />
            </div>
        );
    }
}

export default Notepad;