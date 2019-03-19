/**
 * @return {number}
 */
function Subtraction(minuend, subthraend){
  if(!minuend)
    throw new Error('Minuend can not be Empty');
  if(!subthraend)
    throw new Error('Subthraend can not be Empty');

  return minuend - subthraend;
}


console.log(`Resultado :`, Subtraction(null,2));