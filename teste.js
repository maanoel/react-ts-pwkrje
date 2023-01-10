const funcaoTesteDois = (a, b, c) => {
  console.log(a);
};

const funcaoTesteTres = (object) => {
  console.log(object);
};

export { funcaoTeste, funcaoTesteDois }; //NAMED EXPORT

export default funcaoTesteTres = (a) => {
  console.log(a);
};
