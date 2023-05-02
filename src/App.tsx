import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { Tab } from './types/Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

function choseTabTitle(tabId: string) {
  return tabs.find((t) => t.id === tabId)?.title || '';
}

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const [selectedTabTitle, setSelectedTabTitle] = useState(tabs[0].title);

  const handleTabSelected = (tab: Tab) => {
    setSelectedTabId(tab.id);
    setSelectedTabTitle(choseTabTitle(tab.id));
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTabTitle}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={handleTabSelected}
      />
    </div>
  );
};