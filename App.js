import "./styles.css";
import React from "react";

class MediumMaegen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      randomIndex: ""
    };
  }
  ask = () => {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 23),
        userInput: ""
      });
    }
  }
  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes, definitely",
      "You may rely on it",
      "As I see it, yes",
      "Outlook good",
      "Papa Legba, he say 'No, mon!'",
      "Yes",
      "I bet you'd like that!",
      "Signs point to yes",
      "Reply hazy try again",
      "The spirits say yes!",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Most likely",
      "Outlook not so good",
      "Very doubtful"
    ];
    const answer = possibleAnswers[this.state.randomIndex];
    return (
      <div>
        <h3>
          Type in your question for Medium Maegen. <br />
          She will consult the spirit world and tell your fortune.
        </h3>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.ask}>Ask Medium Maegen</button>
        <br />
        <h3>Answer:</h3>
        <h2>{answer}</h2>
      </div>
    );
  }
}

export default MediumMaegen;
