const contract = require("@truffle/contract");
const companyArtifact = require("platform-contracts/build/ethereum-contracts/Company.json");
const Company = contract(companyArtifact);

Company.setProvider(provider);
const instance = await Company.at("8e2e2cf785...");

const accountOne = "5b42bd01ff...";

try {
    let result = await instance.create("Enkainos Engineering", { from: accountOne });
} catch (err) {
    console.log("ERROR! " + err.message);
}