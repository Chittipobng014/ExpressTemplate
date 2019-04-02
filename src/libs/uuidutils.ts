export const uuid = () => {
  return `${Date.now().toString(36)}${Math.random()
    .toString(36)
    .substring(2)}`;
};

if (require.main === module) {
  console.log(uuid());
}
