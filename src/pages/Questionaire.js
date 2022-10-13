import React from "react";
import { Button, Flex, Stack } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Question from "../components/Question";

function Questionaire() {
  return (
    <div>
      <Question />
    </div>
  );
}

export default Questionaire;