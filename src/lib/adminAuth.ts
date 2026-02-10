import crypto from "crypto";

export const ADMIN_COOKIE_NAME = "admin_session";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

function hmac(input: string, secret: string) {
  return crypto.createHmac("sha256", secret).update(input).digest("hex");
}

/**
 * Cookie format: "<timestamp>.<signature>"
 * signature = HMAC_SHA256(timestamp, secret)
 */

export function makeAdminCookieValue(secret: string) {
  const ts = Date.now().toString();
  const sig = hmac(ts, secret);
  return `${ts}.${sig}`;
}

export function verifyAdminCookieValue(value: string | undefined, secret: string) {
  if (!value) return false;

  const [ts, sig] = value.split(".");
  if (!ts || !sig) return false;

  const issuedAt = Number(ts);
  if (!Number.isFinite(issuedAt)) return false;

  // Expire old sessions
  const ageSeconds = (Date.now() - issuedAt) / 1000;
  if (ageSeconds > MAX_AGE_SECONDS) return false;

  const expected = hmac(ts, secret);

  // timingSafeEqual avoids subtle timing attacks
  try {
    return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
  } catch {
    return false;
  }
}

export const ADMIN_COOKIE_MAX_AGE = MAX_AGE_SECONDS;