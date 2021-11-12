import React, {Component} from 'react';
import './AddTask.css';

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0, 10);
    state = {
        text: "",
        checked: false,
        date: this.minDate,
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value,
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.value,
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value,
        })
    }

    handleClick = () => {
        const {text, checked, date} = this.state;
        if (text.length > 2) {
            const add = this.props.add(text, checked, date);
            if (add) {
                this.setState({
                    text: "",
                    checked: false,
                    date: this.minDate,
                })
            }
        } else{
            alert("za krótka nazwa!");
        }
    }

    render() {

        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + "-12-31";

        return (
            <div className="form">
                <div>Dodaj task</div>
                <input type="text"
                       placeholder="dodaj zadanie"
                       value={this.state.text}
                       onChange={this.handleText}/>
                <input type="checkbox"
                       checked={this.state.checked}
                       id="important"
                       onChange={this.handleCheckbox}/>
                <label htmlFor="important">Priorytet</label><br/>
                <label htmlFor="date">Do kiedy zrobić</label>
                <input type="date"
                       value="2021-11-09"
                       min={this.minDate}
                       max={maxDate}
                       onChange={this.handleDate}/><br/>
                <button onClick={this.handleClick}>Dodaj</button>
                <hr/>
            </div>
        )
    }
}

export default AddTask;