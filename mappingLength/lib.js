const mapLength = function(list){
  let result = [];
  for( let index = 0; index < list.length; index ++){
    result.push(list[index].length);
  }
  return result;
}

exports.mapLength = mapLength;

