#!/usr/bin/env node
/**
 * Generate a scrypt password hash for ADMIN_PASSWORD_HASH.
 *
 * Usage:
 *   node scripts/hash-password.mjs 'your-strong-password'
 *   # or interactively:
 *   node scripts/hash-password.mjs
 */
import { scryptSync, randomBytes } from 'node:crypto';
import { createInterface } from 'node:readline';

function hash(password) {
  const salt = randomBytes(16);
  const derived = scryptSync(password, salt, 64);
  return `scrypt:${salt.toString('hex')}:${derived.toString('hex')}`;
}

function output(password) {
  if (!password || password.length < 8) {
    console.error('✖ Password must be at least 8 characters.');
    process.exit(1);
  }
  console.log('\nAdd this to your environment (e.g. .env.local or your host):\n');
  console.log(`ADMIN_PASSWORD_HASH=${hash(password)}\n`);
}

const arg = process.argv[2];
if (arg) {
  output(arg);
} else {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  rl.question('Enter password to hash: ', (answer) => {
    rl.close();
    output(answer.trim());
  });
}
