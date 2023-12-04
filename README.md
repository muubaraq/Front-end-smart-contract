# Smart Contract Interaction with React
## Description:
This project demonstrates the interaction between a Solidity smart contract and a React frontend using the Thirdweb React library for Ethereum. The smart contract, named "Updater," allows users to update and retrieve their favorite number. The React frontend provides a straightforward user interface to connect a wallet, display the current favorite number, and update it.

## Smart Contract:
### Functionality:
- favNumber: Public variable to store the favorite number.
- updateFavNumber(uint256 _favNumber): Function to update the favorite number.
- getFavNumber(): Function to retrieve the current favorite number.

## React Frontend:
### ConnectWallet Component:
Provides a button to connect the wallet.

## App Component:
Uses the ThirdWeb React Library to interact with the smart contract.
Displays the current favorite number.
Allows users to input a new favorite number and update it through a button click.
Allows users to fetch the updated favorite number using the "Get Updated Fav Number" button.

## Usage:
Connect your wallet using the "ConnectWallet" button.
The current favorite number is displayed on the screen.
Input a new number in the provided field.
Click the "Update" button to update the favorite number in the smart contract.
Click the "Get Updated Fav Number" button to fetch the updated favorite number.

## Note:
Ensure you have a compatible wallet (e.g., MetaMask) installed and connected to the Ethereum network.

## License:
This project is licensed under the MIT License.