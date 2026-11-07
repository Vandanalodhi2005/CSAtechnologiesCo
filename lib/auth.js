import bcrypt from 'bcryptjs';
import { SignJWT, jwtVerify } from 'jose';

const JWT_SECRET =
  process.env.JWT_SECRET || 'csa-technologies-secret-key-production-2026-safe-guard';
const secretKey = new TextEncoder().encode(JWT_SECRET);

export async function hashPassword(plainText) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plainText, salt);
}

export async function verifyPassword(plainText, hashedPassword) {
  if (!plainText || !hashedPassword) return false;
  return bcrypt.compare(plainText, hashedPassword);
}

export async function signAdminToken(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secretKey);
}

export async function verifyAdminToken(token) {
  try {
    if (!token) return null;
    const { payload } = await jwtVerify(token, secretKey);
    return payload;
  } catch {
    return null;
  }
}

export async function getAdminSession(request) {
  try {
    // 1. Check cookies
    let token = null;
    if (request.cookies && typeof request.cookies.get === 'function') {
      const cookie = request.cookies.get('admin_token');
      token = cookie?.value;
    }

    // 2. Fallback to Authorization Header
    if (!token && request.headers) {
      const authHeader =
        request.headers.get('authorization') || request.headers.get('Authorization');
      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.substring(7);
      }
    }

    if (!token) return null;
    return await verifyAdminToken(token);
  } catch (error) {
    console.error('Error verifying admin session:', error);
    return null;
  }
}
