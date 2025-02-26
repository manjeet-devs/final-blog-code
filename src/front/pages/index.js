const modules = import.meta.glob('./*.jsx', { eager: true });

const components = {};
Object.keys(modules).forEach((fileName) => {
  const componentName = fileName.replace(/^\.\/(.*)\.jsx$/, '$1');
  components[componentName] = modules[fileName].default;
});

export default components;
