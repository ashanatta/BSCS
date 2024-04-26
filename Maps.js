const lits = new Map([
  [1, "first"],
  [2, "two"],
  [3, "three"],
  [4, "four"],
]);
lits.set(5, "five");
for (const [key, value] of lits) {
  const warpitem = `key: ${key} and value :${value}`;
  console.log(warpitem);
}
