# Bank DApp Frontend

## Description

This project is the frontend for the `Bank DApp` which interacts with the Bank smart contract deployed on the Ethereum blockchain. The frontend allows users to connect their wallet, deposit funds, withdraw funds, and check their balance.

## Features

The frontend application includes the following features:

- Connect Wallet: Connect your Ethereum wallet to interact with the DApp.
- Deposit Funds: Deposit Ether into the Bank.
- Withdraw Funds: Withdraw Ether from the Bank.
- Check Balance: Check your current Ether balance in the Bank.

## Project Structure

The project consists of the following main files:

- `index.html`: The main HTML file that structures the web page.
- `app.js`: The JavaScript file that handles the frontend logic and interactions with the smart contract.
- `constants.js`: Contains constants and configurations used in the application.
- `ethers-5.6.esm.min.js`: The ethers.js library used to interact with the Ethereum blockchain.
- `LICENSE`: The license file for the project.

## Requirements

- MetaMask (or any Ethereum wallet)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rolandolopez36/bank-dapp-frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bank-dapp-frontend
   ```

## Usage

### Connect Wallet

Click on the "Connect Wallet" button to connect your Ethereum wallet (e.g., MetaMask) to the DApp.

### Deposit Funds

1. Enter the amount of Ether you want to deposit in the "Amount in Ether" field.
2. Click the "Deposit" button to deposit the specified amount of Ether into the Bank.

### Withdraw Funds

1. Enter the amount of Ether you want to withdraw in the "Amount in Ether" field.
2. Click the "Withdraw" button to withdraw the specified amount of Ether from the Bank.

### Check Balance

Click the "Check My Balance" button to check your current Ether balance in the Bank. The balance will be displayed below the button.

## Configuration

Update`constants.js` with the correct ABI and contract address of your deployed smart contract.

## Contributions

Contributions are welcome. Please follow these steps to contribute:

1. Fork the project.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make the necessary changes and commit them (`git commit -am 'Add new feature'`).
4. Push the changes to your fork (`git push origin feature/new-feature`).
5. Open a Pull Request.

### Additional Tips

- **Keep your fork updated**: Ensure your fork is up-to-date with the original repository to avoid conflicts.
- **Document your changes**: Update documentation and comments in the code if you make significant changes.
- **Follow coding standards**: Adhere to the project's coding conventions and style.

Thank you for contributing!

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
