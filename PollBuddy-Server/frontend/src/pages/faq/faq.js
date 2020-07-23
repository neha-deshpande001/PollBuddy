import React, {Component} from "react";
import {MDBContainer} from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import ReactMarkdown from "react-markdown";
import faqFile from "./faq.md";

export default class FAQ extends Component {

  constructor(props) {
    super(props);
    this.state = {questions: null}
  }

  componentWillMount() {
    fetch(faqFile).then((response) => response.text()).then((text) => {
      this.setState({questions: text})
    })
  }
  
  componentDidMount() {
    this.props.updateTitle("Frequently Asked Questions");
  }

  render() {
    return (
      <MDBContainer fluid className="page" style={{ color: "#FFF", fontFamily: "monospace" }}>
        <ReactMarkdown className="width-90 fontSizeSmall" source={this.state.questions}/>
      </MDBContainer>
    );
  }

}