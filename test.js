const Redis = require('ioredis');

const redis = new Redis({
    host: "myfirstredis.89owxy.0001.aps1.cache.amazonaws.com",
    port: 6379
})

async function fun(){
    const value = await redis.set('key1', 'value');
    console.log(value);
    const val1 = await redis.get("key1");
    console.log(val1);
    redis.quit();
}

fun();

