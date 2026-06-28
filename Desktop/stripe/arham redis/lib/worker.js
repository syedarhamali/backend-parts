import { Worker } from 'bullmq';
import redis from './redis.js'

const worker = new Worker(
  'emailQueue',
  async job => {
    // Will print { foo: 'bar'} for the first job
    // and { qux: 'baz' } for the second.

    /// send email by nodemailer
    // code........

    console.log(job.data);
  },
  { redis },
);