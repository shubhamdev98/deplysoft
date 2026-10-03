import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

export const appRouter = router({
  getHeroContent: publicProcedure.query(() => {
    return {
      title: "Boost Business Strategically",
      subtitle: "Harness Smart Strategies To Unlock Sustainable Growth, Maximize Profits, And Maintain A Competitive Edge In Today's Fast-Paced.",
      badgeText: "Business World",
      footerTagline: "Smart Strategies. Real Growth. 2026.",
      brandName: "necons",
    };
  }),

  getMetrics: publicProcedure.query(() => {
    return {
      growthRate: "+240%",
      activeClients: "18.4K",
      efficiencyScore: "99.8%",
      marketShare: "42.5%",
      updatedAt: new Date().toISOString(),
    };
  }),

  scheduleCall: publicProcedure
    .input(
      z.object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.string().email("Invalid email address"),
        date: z.string(),
        company: z.string().optional(),
        notes: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      await new Promise((resolve) => setTimeout(resolve, 800));

      const bookingId = `BK-${Math.floor(100000 + Math.random() * 900000)}`;

      return {
        success: true,
        message: `Strategy call successfully booked for ${input.name}!`,
        bookingId,
        details: {
          name: input.name,
          email: input.email,
          date: input.date,
          company: input.company || "Not specified",
        },
      };
    }),

  sendMessage: publicProcedure
    .input(
      z.object({
        name: z.string().min(2, "Name is required"),
        email: z.string().email("Valid email required"),
        subject: z.string().min(3, "Subject is required"),
        message: z.string().min(10, "Message must be at least 10 characters"),
      })
    )
    .mutation(async ({ input }) => {
      await new Promise((resolve) => setTimeout(resolve, 600));
      return {
        success: true,
        message: "Thank you for reaching out! Our strategy team will respond within 2 hours.",
        ticketId: `TICK-${Math.floor(1000 + Math.random() * 9000)}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
