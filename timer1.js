// process.stdout.write('\x07');
const args = process.argv.slice(2);
console.log(args);

for(let i = 0; i < args.length; i++){
  let second = Number(args[i]);
  setTimeout(() => {
    process.stdout.write('\x07');
    // console.log("beep");
  },second * 1000);
};

// const timer = setTimeout((second) => {
//     process.stdout.write('\x07');
//   }, second * 1000);


