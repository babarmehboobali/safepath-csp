import { createServerFn } from "@tanstack/react-start";
import type { StudioSession } from "./session";

/** @deprecated Account credentials are managed by Better Auth. */
export const cloudUpsertSeat = createServerFn({ method: "POST" })
  .validator((data: { email?: string; name?: string }) => data)
  .handler(async ({ data }) => {
    const { serverUpsertSeat } = await import("./seats.server");
    await serverUpsertSeat(data);
    return { ok: true as const };
  });

/** @deprecated The authenticated Better Auth session determines the account. */
export const cloudFindSeat = createServerFn({ method: "POST" })
  .validator(() => ({}))
  .handler(async () => {
    const { serverFindSeat } = await import("./seats.server");
    return serverFindSeat();
  });

export const cloudSaveProgress = createServerFn({ method: "POST" })
  .validator((data: StudioSession) => data)
  .handler(async ({ data }) => {
    const { serverSaveProgress } = await import("./seats.server");
    await serverSaveProgress(data);
    return { ok: true as const };
  });

export const cloudLoadProgress = createServerFn({ method: "POST" })
  .validator(() => ({}))
  .handler(async () => {
    const { serverLoadProgress } = await import("./seats.server");
    return serverLoadProgress();
  });
