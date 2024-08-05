/* Segun chatgpt esta version es mejor */

import { ethers } from "./ethers-5.6.esm.min.js";
import { contractAddress, abi } from "./constants.js";

// HTML element references
const connectButton = document.getElementById("connectButton");
const depositForm = document.getElementById("depositForm");
const withdrawForm = document.getElementById("withdrawForm");
const balanceButton = document.getElementById("balanceButton");
const balanceDiv = document.getElementById("balance");

// Assign functions to button events
connectButton.onclick = connect;
depositForm.onsubmit = depositFunds;
withdrawForm.onsubmit = withdrawFunds;
balanceButton.onclick = checkBalance;

// Function to connect to MetaMask
async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      console.log("Requesting access to MetaMask...");
      await window.ethereum.request({ method: "eth_requestAccounts" });
      console.log("Connected to MetaMask");
      connectButton.innerHTML = "Connected";

      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log(accounts);

      await checkEthBalance(accounts[0]);
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  } else {
    connectButton.innerHTML = "Please install MetaMask";
    console.log("MetaMask is not installed");
  }
}

async function checkEthBalance(account) {
  if (window.ethereum) {
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [account, "latest"],
      });
      console.log("Eth Balance", ethers.utils.formatEther(balance));
    } catch (err) {
      console.error("Error getting ETH balance:", err);
    }
  }
}

// Function to deposit funds
async function depositFunds(event) {
  event.preventDefault();
  const amount = document.getElementById("depositAmount").value;
  console.log(`Depositing... ${amount} ETH`);

  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      const tx = await contract.depositFunds({
        value: ethers.utils.parseEther(amount),
      });
      await listenForTransactionMine(tx, provider);
      alert("Deposit successful");
    } catch (error) {
      console.error("Error depositing funds:", error);
      alert("An error occurred while depositing funds.");
    }
  }
}

// Function to withdraw funds
async function withdrawFunds(event) {
  event.preventDefault();
  const amount = document.getElementById("withdrawAmount").value;
  console.log(`Withdrawing... ${amount} ETH`);

  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      const tx = await contract.withdrawFunds(ethers.utils.parseEther(amount));
      await listenForTransactionMine(tx, provider);
      alert("Withdrawal successful");
    } catch (error) {
      console.error("Error withdrawing funds:", error);
      alert("An error occurred while withdrawing funds.");
    }
  }
}

// Function to check balance
async function checkBalance() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      const balance = await contract.balanceCheck();
      balanceDiv.innerHTML = `Your balance is: ${ethers.utils.formatEther(
        balance
      )} ETH`;
    } catch (error) {
      console.error("Error checking balance:", error);
      alert("An error occurred while checking balance.");
    }
  } else {
    alert("Please install MetaMask to check balance.");
  }
}

// Function to listen for transaction confirmation
function listenForTransactionMine(transactionResponse, provider) {
  console.log(`Mining ${transactionResponse.hash}...`);
  return new Promise((resolve, reject) => {
    provider.once(transactionResponse.hash, (transactionReceipt) => {
      console.log(
        `Transaction completed with ${transactionReceipt.confirmations} confirmations.`
      );
      resolve();
    });

    provider.once("error", (error) => {
      console.error(`Transaction error: ${error}`);
      reject(error);
    });
  });
}
