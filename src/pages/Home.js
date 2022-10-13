import React from "react";
import { Button, Flex, Stack } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>Lorum ipsum</p>
      <Flex direction="row" justifyContent="space-between">
        <Link to="/questionaire">
          <Button variant="solid" rightIcon={<ArrowForwardIcon/>}>Start naming faces</Button>
        </Link>
        <Link to="/results">
          <Button variant="outline">See the results</Button>
        </Link>
      </Flex>
    </div>
  );
}

export default Home;