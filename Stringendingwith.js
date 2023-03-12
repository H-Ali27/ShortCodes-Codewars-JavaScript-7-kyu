
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
  // TODO: complete#

  //   var res;
//   var last = str.substring(str.length - ending.length);
  
//   if (last === ending){
//     res = true;
//   }else
//     {
//       res = false;
//     }
//   return res;
  
//   return str.indexOf(ending, str.length - ending.length) !== -1;
  
  return str.substr(-ending.length) === ending;
  }