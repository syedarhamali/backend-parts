import { Queue } from 'bullmq';
import { redis } from '../redis.js';

const emailQueue = new Queue('emailQueue', { redis: redis });


// [ job1, job2, job3]

async function addJobs() {
  await emailQueue.add('email1', { to: 'bar', from:'user', message:'some text' });
  await emailQueue.add('email2', { qux: 'baz' });
}

await addJobs();