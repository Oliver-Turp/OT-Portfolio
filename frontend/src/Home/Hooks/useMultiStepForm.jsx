import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSessionStorage } from './useSessionStorage';
import { useTabs } from './useTabs';

const useMultiStepForm = (steps) => {
  // const { goToTab, tab, tabId, tabs, setTabs } = useTabs(
  //   formParts,
  //   formParts[0].id
  // );

  const [stepId, setStepId] = useSessionStorage('QUOTE_FORM_STEP_ID', 0);
  const [currentMaxStepId, setCurrentMaxStepId] = useSessionStorage(
    'QUOTE_FORM_MAX_STEP_YET',
    0
  );
  useEffect(() => {
    console.log("stepId: ", stepId)
    if (stepId > currentMaxStepId) {
      setCurrentMaxStepId(stepId);
    }
  }, [stepId]);

  function goToStep(id) {
    setStepId(id);
  }

  function next() {
    // basically, if the current index is for the last element don't increment so we don't go out of bounds in the array
    goToStep(stepId >= steps.length - 1 ? stepId : stepId + 1);
  }

  function prev() {
    goToStep(stepId <= 0 ? stepId : stepId - 1);
  }
  function resetMultiStep(){
    setStepId(0)
    setCurrentMaxStepId(0)
  }
  return {
    // goToStep: goToTab,
    step: steps[stepId],
    stepId,
    steps,
    next,
    prev,
    goTo: goToStep,
    currentMaxStepId,
    resetMultiStep
  };
};

export default useMultiStepForm;
