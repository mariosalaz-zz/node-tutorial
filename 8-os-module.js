const os =  require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns ths system uptime un seconds
console.log(`system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};

console.log(currentOS)
