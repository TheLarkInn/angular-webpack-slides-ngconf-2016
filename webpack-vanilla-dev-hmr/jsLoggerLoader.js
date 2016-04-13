module.exports = function jsLoggerLoaderFn(source) {
  console.log("JS LOGGER LOADER LOADED SOME SAUCE: ", this.data);



  return source;
}