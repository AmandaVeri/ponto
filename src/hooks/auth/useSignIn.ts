import { useMutation } from '@tanstack/react-query';

import { authService } from '@/services/auth/authService';

export function useSignIn() {
  return useMutation({
    mutationFn: authService.signIn,
  });
}
