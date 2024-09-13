import {Component} from "react";

export default class Watch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: this.getTime(props.timezone)
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {this.update()}, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  update() {
    this.setState({time: this.getTime(this.props.timezone)});
  }

  getTime(timezone) {
    const time = new Date();
    const utc = new Date(time.getTime() + time.getTimezoneOffset() * 60 * 1000);
    const newTime = new Date(utc.getTime() + timezone * 60 * 60 * 1000);

    return newTime.toTimeString().slice(0, 8);
  }

  render() {
    return (
      <div className="watch">
        <div className="watch__name">{this.props.name}</div>
        <div className="watch__time">{this.state.time}</div>
        <button type="button" onClick={() => this.props.onDelete(this.props.id)}>Удалить</button>
      </div>
    );
  }
}