2. What is the use of the keyof keyword in TypeScript? 

keyof হলো TypeScript-এর একটি শক্তিশালী টাইপ অপারেটর, যা কোনো অবজেক্ট টাইপের সব কী-এর union type তৈরি করে।
এটি সাধারণত টাইপ-সেফ প্রপার্টি অ্যাক্সেস, জেনেরিক ফাংশন, এবং mapped types-এ ব্যবহৃত হয়।


উদাহরণ:

interface User {
  name: string;
  age: number;
  isActive: boolean;
}

type UserKeys = keyof User;


এখন UserKeys টাইপটি হবে:

type UserKeys = "name" | "age" | "isActive";


এটি কাজে লাগে যখন আমরা কোনো ফাংশনে object key-কে নিরাপদভাবে পাস করতে চাই:

function getProperty(obj: User, key: UserKeys) {
  return obj[key];
}

const user: User = {
  name: "Shafi",
  age: 20,
  isActive: true
};

console.log(getProperty(user, "age"));       // OK
console.log(getProperty(user, "isActive"));  // OK
// console.log(getProperty(user, "height")); // Error: not a key of User

 কেন প্রয়োজন?

ভুল key-নাম দিলে TypeScript error দেখায়

কোড আরও নিরাপদ, বিশুদ্ধ এবং maintainable হয়

Object manipulation-এ টাইপ-সেফটি নিশ্চিত করে


                 ---------------------------------------------------------------------------

3.Explain the difference between any, unknown, and never types in TypeScript.


TypeScript-এর এই তিনটি টাইপ দেখতে কাছাকাছি হলেও কাজ পুরোপুরি আলাদা।

 ১. any

TypeScript-এ সবচেয়ে কম নিরাপদ টাইপ।

এতে TypeScript সবকিছু allow করে দেয় — আর কোনো type checking হয় না।

যেকোনো টাইপ assign করা যায়, এবং এতে যেকোনো অপারেশন করা যায়।

let value: any = "hello";
value = 10;
value = true;
value.toUpperCase(); // no error


 ঝুঁকি: ভুল কোড হলেও TypeScript error দেখাবে না।

 ২. unknown

any-এর নিরাপদ সংস্করণ।

যেকোনো টাইপ সেই ভেরিয়েবলে assign করা যায়, কিন্তু
ব্যবহার করার আগে টাইপ চেক করতে হবে।

let data: unknown = "hello";
data = 12;

if (typeof data === "string") {
  console.log(data.toUpperCase()); // safe
}


 unknown ব্যবহার করলে TypeScript আমাদের সতর্কভাবে কোড লিখতে বাধ্য করে, তাই কোড আরও নিরাপদ হয়।

৩. never

এমন টাইপ, যা কখনই কোনো ভ্যালু ধারণ করতে পারে না।

সাধারণত দুটি ক্ষেত্রে দেখা যায়:

কোনো ফাংশন কখনো return না করলে (যেমন infinite loop বা error throw করা)

Exhaustive type checking-এ — যেখানে সব অপশন handle করা থাকে

উদাহরণ ১ — return না করা ফাংশন
function throwError(): never {
  throw new Error("Something went wrong!");
}

উদাহরণ ২ — impossible case
type Shape = "circle" | "square";

function draw(shape: Shape) {
  switch (shape) {
    case "circle":
      break;
    case "square":
      break;
    default:
      const _exhaustiveCheck: never = shape; 
  }
}


 never TypeScript-কে জানায়: এখানে ভুল টাইপ এলে সেটা ধরো।
