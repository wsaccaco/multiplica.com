import json from './trama-examen-1.json';

function process(json){

  function searchIn(parameters, search = []){
    return !!(parameters.find(i => search.includes(i.in)))
  }

  function _parameters(parameters = []){
    return parameters.map(({name, required, type}, index) => ({
      name,
      isRequired: required,
      comma: parameters.length - 1 === index,
      isBoolean: type === 'boolean',
      isNumber : type === 'number',
      isString: type === 'string'
    }))
  }

  /**
   * @return {string}
   */
  function CapitalizeCase(text){
    let [firstLetter, ...rest] = text.toLowerCase().split('');
    let _text = [firstLetter.toUpperCase(), ...rest];
    return _text.join('');
  }


  let keys = Object.keys(json.paths);
  return keys.map(key => {
    let {get: {consumes = [], parameters, operationId}} = json.paths[(key)];
    return Object.assign({},{
      consumes: consumes[0],
      hasBodyOrQueryReq: searchIn(parameters, ['query', 'body']),
      hasBodyReq: searchIn(parameters, ['body']),
      hasParameters: !!parameters.length,
      hasPathReq: searchIn(parameters, ['path']),
      hasQueryReq: searchIn(parameters, ['query']),
      httpMethod: 'get',
      parameters: {
        body: {},
        path: {},
        query: {
          modelName : `Req${CapitalizeCase(operationId)}`,
          params : _parameters(parameters)
        }
      },
      path: key
    });
  });
}

console.log(process(json));