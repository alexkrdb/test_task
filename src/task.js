const test_task = (data) => {
  let result = [];
  const group = (item) => {
    //means we are in bookshelve
    if (item.shelves) {
      item.shelves.forEach(group);
    }
    // ... in shelve
    if (item.books) {
      item.books.forEach(group);
    }
    // ... particular book
    if (item.title) {
      const genre = item.genre;
      //filling result dictionary
      if (!result[genre]) {
        result[genre] = { genre, books: [] };
      }
      result[genre].books.push(item);
    }
  };

  data.forEach(group);

  return Object.values(result);
};

module.exports = test_task;
