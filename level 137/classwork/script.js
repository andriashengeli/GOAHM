let myset = new Set();

myset.add(1);
myset.add(2);
myset.add(3);

myset.delete(2);

console.log(myset.has(2));

console.log(myset.size);


myset.clear();