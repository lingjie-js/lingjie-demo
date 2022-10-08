import './App.css'
import { Layout } from '@lingjie-demo/shard'

import { Calendar } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Moment } from 'moment';
import React from 'react';

const App: React.FC = () => {
  const onPanelChange = (value: Moment, mode: CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return <Layout>
    <Calendar style={{ padding: 24 }} onPanelChange={onPanelChange} />
  </Layout>;
};

export default App
