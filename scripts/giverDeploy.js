const main = async () => {

  const Giver = await ethers.getContractFactory("Giver");
  const giver = await Giver.deploy();

  await giver.deployed()
  console.log("Giver deployed to:", giver.address);

};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
