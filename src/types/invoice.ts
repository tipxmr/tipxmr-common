import * as z from 'zod';

export const Invoice = z.object({
  id: z.string(),
  streamer: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  planType: z.string(),
  paidStatus: z.string(),
});

export type Invoice = z.infer<typeof Invoice>;
export default Invoice
