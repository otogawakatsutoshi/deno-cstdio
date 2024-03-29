import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    getc,
  } = library.symbols;

  return {
    getc,
    library,
  };
}

export {
  load,
}
