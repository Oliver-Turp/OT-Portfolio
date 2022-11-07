import React from 'react';
import {useState} from 'react'
import { useTabs } from './useTabs';

const useMultiStepForm = (steps) => {
  // const { goToTab, tab, tabId, tabs, setTabs } = useTabs(
  //   formParts,
  //   formParts[0].id
  // );

  const [stepId, setCurrentStepId] = useState(0);

  function goToStep(id) {
    setCurrentStepId(id);
  }

  function next() {
    // basically, if the current index is for the last element don't increment so we don't go out of bounds in the array
    goToStep(stepId >= steps.length - 1 ? stepId : stepId + 1);
  }

  function prev() {
    goToStep(stepId <= 0 ? stepId : stepId - 1);
  }
  return {
    // goToStep: goToTab,
    step: steps[stepId],
    stepId,
    steps,
    next,
    prev,
  };
};

export default useMultiStepForm;
