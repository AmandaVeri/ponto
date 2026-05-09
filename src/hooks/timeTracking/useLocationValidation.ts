import { locationService } from '@/services/timeTracking/locationService';

export function useLocationValidation() {
  async function validateEmployeeLocation() {
    return locationService.validateEmployeeLocation();
  }

  return {
    validateEmployeeLocation,
  };
}
