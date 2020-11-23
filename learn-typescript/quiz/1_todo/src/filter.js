const arr = [
  { gender: 'male', name: 'john' },
  { gender: 'female', name: 'sarah' },
  { gender: 'male', name: 'bone' },
];

const filtered = arr.filter(function (item) {
  if (item.gender === 'female') {
    return item;
  }
});

console.log(filtered);
