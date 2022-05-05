const adjacentElementproduct = (MyNumber: number[]): number => {
  //Check to see the largest digit
  let largestNumber = MyNumber[0] * MyNumber[1];

  for (let i = 0; i < MyNumber.length - 1; i++) {
    const product = MyNumber[i] * MyNumber[i + 1];

    largestNumber = largestNumber > product ? largestNumber : product;
  }
  return largestNumber;
};

console.log(adjacentElementproduct([-12, 3, 4, 5, 9, -4]));
