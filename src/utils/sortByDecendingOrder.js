//points.sort(function(a, b){return a - b});
// this function takes array ob objects(Books)
function sortByDesendingOrder(books) {
    return books.sort((a, b) => b.rating - a.rating)
}

export { sortByDesendingOrder }