import React from 'react';

import { CurrentTimeCard } from '@/components/timeTracking/CurrentTimeCard';
import { EmployeeBottomTabs } from '@/components/timeTracking/EmployeeBottomTabs';
import { EmployeeHeader } from '@/components/timeTracking/EmployeeHeader';
import { ScreenContainer } from '@/components/timeTracking/ScreenContainer';
import { TimeClockGrid } from '@/components/timeTracking/TimeClockGrid';
import { WorkSummaryCard } from '@/components/timeTracking/WorkSummaryCard';
import { useTimeClock } from '@/hooks/timeTracking/useTimeClock';

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
