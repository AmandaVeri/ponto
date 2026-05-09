import React from 'react';

import { CurrentTimeCard } from '../components/CurrentTimeCard';
import { EmployeeBottomTabs } from '../components/EmployeeBottomTabs';
import { EmployeeHeader } from '../components/EmployeeHeader';
import { ScreenContainer } from '../components/ScreenContainer';
import { TimeClockGrid } from '../components/TimeClockGrid';
import { WorkSummaryCard } from '../components/WorkSummaryCard';
import { useTimeClock } from '../hooks/useTimeClock';

export function EmployeeTimeClockScreen() {
  const { summary, isRegistering, handleTimeClock } = useTimeClock();

  return (
    <ScreenContainer footer={<EmployeeBottomTabs activeTab="timeClock" />}>
      <EmployeeHeader employeeName="João" dateLabel="Segunda-feira, 20/05/2024" />
      <CurrentTimeCard />
      <WorkSummaryCard lastMark={summary.lastMark} workedHoursToday={summary.workedHoursToday} />
      <TimeClockGrid disabled={isRegistering} onTimeClockPress={handleTimeClock} />
    </ScreenContainer>
  );
}
