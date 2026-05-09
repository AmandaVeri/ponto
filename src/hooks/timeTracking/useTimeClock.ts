import { useState } from 'react';

import { timeClockService } from '@/services/timeTracking/timeClockService';
import type { TimeClockSummary, TimeClockType } from '@/types/timeTracking/timeClock';
import { useLocationValidation } from './useLocationValidation';

const initialSummary: TimeClockSummary = {
  lastMark: '—',
  workedHoursToday: '00:00',
};

export function useTimeClock() {
  const [summary] = useState<TimeClockSummary>(initialSummary);
  const [isRegistering, setIsRegistering] = useState(false);
  const { validateEmployeeLocation } = useLocationValidation();

  async function handleTimeClock(type: TimeClockType) {
    setIsRegistering(true);

    try {
      const locationValidation = await validateEmployeeLocation();

      if (!locationValidation.allowed) {
        console.log('[useTimeClock] location not allowed', locationValidation.reason);
        return false;
      }

      const registration = await timeClockService.registerTimeClock(type);
      console.log('[useTimeClock] registered', registration);
      // TODO: Navigate to ConfirmationTimeClockScreen when the route is implemented.
      return true;
    } finally {
      setIsRegistering(false);
    }
  }

  return {
    summary,
    isRegistering,
    handleTimeClock,
  };
}
