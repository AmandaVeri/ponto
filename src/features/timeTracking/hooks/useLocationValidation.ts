import { locationService } from '../services/locationService';

export function useLocationValidation() {
  async function validateEmployeeLocation() {
    return locationService.validateEmployeeLocation();
  }

  return {
    validateEmployeeLocation,
  };
}
