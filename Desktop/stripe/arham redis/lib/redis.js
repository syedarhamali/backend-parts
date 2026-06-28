import Redis from 'ioredis';

const redis = new Redis({
    port: 6379,
    host: '127.0.0.1',
})


//// redis running on docker desktop 

export { redis}