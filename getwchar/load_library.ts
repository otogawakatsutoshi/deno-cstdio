import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    getwchar,
  } = library.symbols;

  return {
    getwchar,
    library,
  };
}

export {
  load,
}
