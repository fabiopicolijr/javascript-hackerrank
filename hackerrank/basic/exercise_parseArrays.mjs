"use strict";

main();

/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 * Há uma coleção de strings de entrada e uma coleção de strings de consulta.
 * Para cada string de consulta, determine quantas vezes ela ocorre na lista de
 * strings de entrada. Retorne uma matriz dos resultados.
 *
 */

// My solution
function matchingStrings(strings, queries) {
  const results = [];

  for (var i = 0; i < queries.length; i++) {
    const query = queries[i];
    let count = 0;

    for (var j = 0; j < strings.length; j++) {
      if (strings[j] === query) count++;
    }

    results.push(count);
  }

  return results;
}

function main() {
  const strings = ["ab", "ab", "abc"];
  const queries = ["ab", "abc", "bc"];

  const res = matchingStrings(strings, queries);

  console.log(res);
}
