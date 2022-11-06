import { useState } from 'react';
export function useTabs(tabArray, defaultId) {
  const [currentTabId, setCurrentTabId] = useState(defaultId);
  const [tabs, setTabs]  = useState(tabArray)

  function goToTab(id) {
    setCurrentTabId(id);
  }

  return {
    tabs,
    tabId: currentTabId,
    setTabs,
    tab: tabs.find(item => item.id === currentTabId),
    goToTab,
  };
}
