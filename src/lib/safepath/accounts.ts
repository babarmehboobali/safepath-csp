import { authClient } from "@/lib/auth/client";

export type Account = { email: string; name: string };

function emailValue(email: string) {
  const value = email.trim().toLowerCase();
  if (!value || !value.includes("@")) throw new Error("Enter a valid email.");
  return value;
}

function passwordValue(password: string) {
  if (password.length < 8) throw new Error("Password must be at least 8 characters.");
  if (password.length > 128) throw new Error("Password must be 128 characters or fewer.");
}

function errorMessage(error: unknown, fallback: string) {
  if (error && typeof error === "object" && "message" in error) {
    const value = String((error as { message?: unknown }).message || "");
    if (value) return value;
  }
  return fallback;
}

/** Better Auth is the only account authority. Credentials and sessions are never stored in browser persistence. */
export async function registerAccount(name: string, email: string, password: string) {
  if (!name.trim()) throw new Error("Enter your name.");
  const key = emailValue(email);
  passwordValue(password);
  const { data, error } = await authClient.signUp.email({
    name: name.trim(),
    email: key,
    password,
    callbackURL: "/onboarding",
  });
  if (error || !data?.user) throw new Error(errorMessage(error, "Could not create your account."));
  return { email: data.user.email, name: data.user.name } satisfies Account;
}

export async function loginAccount(email: string, password: string, rememberMe = true) {
  const key = emailValue(email);
  passwordValue(password);
  const { data, error } = await authClient.signIn.email({ email: key, password, rememberMe, callbackURL: "/today" });
  if (error || !data?.user) throw new Error(errorMessage(error, "Email or password is incorrect."));
  return { email: data.user.email, name: data.user.name } satisfies Account;
}

export async function requestPasswordReset(email: string) {
  const key = emailValue(email);
  const redirectTo = `${window.location.origin}/reset-password`;
  const { error } = await authClient.requestPasswordReset({ email: key, redirectTo });
  if (error) throw new Error(errorMessage(error, "Could not start password reset."));
}

export async function resetPassword(token: string, password: string) {
  if (!token) throw new Error("This password-reset link is missing its token.");
  passwordValue(password);
  const { error } = await authClient.resetPassword({ token, newPassword: password });
  if (error) throw new Error(errorMessage(error, "This reset link is invalid or expired."));
}
