import { createTRPCReact } from '@trpc/react-query';
import { AppRouter } from '../../backend/src/app'

export const trpc = createTRPCReact<AppRouter>()