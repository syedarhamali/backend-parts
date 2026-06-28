import { Queue } from 'bullmq';
import { redis } from '../redis.js';

const paymentQueue = new Queue('paymentQueue', { redis: redis });

// [ job1, job2, job3]

async function addJobs() {
  await paymentQueue.add('email1', { to: 'bar', from:'user', message:'some text' });
  await paymentQueue.add('email2', { qux: 'baz' });
}

await addJobs();