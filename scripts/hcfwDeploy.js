const main = async () => {

  const HCFW = await ethers.getContractFactory("HCFW");
  const hcfw = await HCFW.deploy();

  await hcfw.deployed()
  console.log("HCFW deployed to:", hcfw.address);

};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
