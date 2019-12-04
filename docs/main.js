const go = new Go();
const exec = async () => {
  const result = await WebAssembly.instantiateStreaming(
    fetch("main.wasm"),
    go.importObject
  );
  go.run(result.instance);
};
exec();
