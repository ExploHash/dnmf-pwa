import React from "react";
import Select from "react-select";
import AsyncSelect from 'react-select/async';

import { Link } from "react-router-dom";
import { Button, ButtonGroup, Flex, Image, Text } from "@chakra-ui/react";
import ApiService from "../services/ApiService";

const apiUrl = process.env.REACT_APP_API_URL;

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.service = new ApiService();
    this.selectComponent = React.createRef();
    this.state = {
      imageUrl: null,
      name: null,
      selectedNameId: null,
      nameValue: null,
      names: [
        { value: "1", label: "John" },
        { value: "2", label: "Jane" },
      ],
    };
  }

  componentDidMount() {
    this.grabQuestion();
  }

  async autoCompleteName(name) {
    const names = await this.service.autocompleteName(name);

    const remappedNames = names.map((name) => {
      return { value: name.id, label: name.name };
    });

    return remappedNames;
  }

  async grabQuestion(){
    const person = await this.service.getRandomPerson();
    console.log(person);

    this.setState({
      imageUrl: `${apiUrl}/${person.id}.jpg`,
      person: person,
    });

    console.log(this.state);
  }

  async reportPerson(){
    await this.service.sendReport(this.state.person.id);
    this.grabQuestion();
  }

  async skipPerson(){
    await this.service.sendSkip(this.state.person.id);
    this.grabQuestion();
  }

  async namePerson(){
    await this.service.namePerson(this.state.person.id, this.state.selectedNameId);
    this.selectComponent.current.clearValue();
    this.grabQuestion();
  }

  setChoice(choice){
    this.setState({
      selectedNameId: choice
    });
  }

  render() {
    return (
      <div>
        <Text fontSize="2xl" >What name comes to mind when looking at this person?</Text>
        <Image borderRadius="5" mb="5" mt="5" src={this.state.imageUrl} alt="person" />
        <AsyncSelect ref={this.selectComponent} cacheOptions defaultOptions loadOptions={async (input) => this.autoCompleteName(input)} onChange={(choice) => this.setChoice(choice?.value)} />
        <Flex direction="row" justifyContent="space-between" mt="5">
          <ButtonGroup>
            <Button colorScheme="green" variant="solid" onClick={async () => this.namePerson()}>
              Submit
            </Button>
            <Button variant="solid" onClick={async () => this.skipPerson()}>Skip</Button>
          </ButtonGroup>
          <Button variant="outline" onClick={async() => this.reportPerson()}>Report</Button>
        </Flex>
      </div>
    );
  }
}

export default Question;
