const hre = require("hardhat");

async function main() {
  const IdentityVerification = await hre.ethers.getContractFactory("IdentityVerification"); 

  console.log("Contract factory fetched. Deploying contract...");
  
  const identityVerification = await IdentityVerification.deploy(); 

  console.log("Contract deployment transaction sent. Waiting for it to be mined...");

  await identityVerification.deployed();

  console.log("IdentityVerification contract deployed to address:", identityVerification.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0x5FbDB2315678afecb367f032d93F642f64180aa3//