export const locationService = {
  validateEmployeeLocation: async () => {
    console.log('[locationService] validateEmployeeLocation');

    return {
      allowed: true,
      reason: null,
    };
  },
};
