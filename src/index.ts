
// 8
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  let total = 0;

  for (const item of products) {
    const price = item.price;
    const quantity = item.quantity;
    const discount = item.discount ?? 0;
    const discountedPrice = price - (price * discount) / 100;
    total = total + discountedPrice * quantity;
  }
  return total;
}


// 7
function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number )[] {
  const result: (string | number)[] = [];

  function isInResult(value: string | number): boolean {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) return true;
    }
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i];
    if (item !== undefined &&!isInResult(item)) {
      result[result.length] = item;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
     const item = arr1[i];
    if (item && !isInResult(item)) {
      result[result.length] = item;
    }
  }
  return result;
 
}

// 6

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book?.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}


// 5
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  const result: User[] = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    if (user && typeof user.isActive === "boolean" && user.isActive === true) {
      result[result.length] = user;
    }
  }
  return result;
}


// 4

type Item = {
  title: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
};

function filterByRating(items: Item[]): Item[] {
  const result: Item[] = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (item && item.rating >= 4) {
      result[result.length] = item;
    }
  }
  return result;
}


// 3

class Person {
  name: string;
  age: number;

  constructor(_name: string, _age: number) {
    this.name = _name;
    this.age = _age;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// 2

function getLength(value: string | number[]): number {
  return value.length;
}


// 1

function formatValue(
  value: string | number | boolean
): string | number | boolean  {
  if (typeof value === "string") return value.toUpperCase();

  else if (typeof value === "number") return value * 10;
 else if (typeof value === "boolean") return !value;

  throw new Error("Unsupported type");
}


 
