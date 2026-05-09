import type { TimeClockType } from '@/types/timeTracking/timeClock';

export const timeClockService = {
  registerTimeClock: async (type: TimeClockType) => {
    console.log('[timeClockService] registerTimeClock', type);

    return {
      id: String(Date.now()),
      type,
      registeredAt: new Date().toISOString(),
    };
  },
};
