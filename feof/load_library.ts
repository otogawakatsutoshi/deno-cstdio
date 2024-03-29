import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    feof,
  } = library.symbols;

  return {
    feof,
    library,
  };
}

export {
  load,
}
