import { createServerFn } from "@tanstack/react-start";
import type { Account } from "./accounts";
import type { StudioSession } from "./session";

export const cloudUpsertSeat = createServerFn({ method: "POST" })
  .validator((data: Account) => data)
  .handler(async ({ data }) => {
    const { serverUpsertSeat } = await import("./seats.server");
    await serverUpsertSeat(data);
    return { ok: true as const };
  });

export const cloudFindSeat = createServerFn({ method: "POST" })
  .validator((data: { email: string }) => data)
  .handler(async ({ data }) => {
    const { serverFindSeat } = await import("./seats.server");
    return serverFindSeat(data.email);
  });

export const cloudSaveProgress = createServerFn({ method: "POST" })
  .validator((data: StudioSession) => data)
  .handler(async ({ data }) => {
    const { serverSaveProgress } = await import("./seats.server");
    await serverSaveProgress(data);
    return { ok: true as const };
  });

export const cloudLoadProgress = createServerFn({ method: "POST" })
  .validator((data: { email: string }) => data)
  .handler(async ({ data }) => {
    const { serverLoadProgress } = await import("./seats.server");
    return serverLoadProgress(data.email);
  });
