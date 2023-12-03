# Smart Contract Interaction with React

### Description:
This project demonstrates the interaction between a solidity smart contract and a React frontend using the Thirdweb React library for Ethereum. The smart contract, named "Updater", allows user to update and the retrieve their favorite number. The react frontend provides simple user interface to connect a wallet, display the current favorite number, and update it.

### Smart Contract:
- Functionality:
 - favNumber: Public variable to store the favorite number.
 - updateFavNumber(uint25 _favNumber): Function to update the favorite number.

 ### React Frontend:
 - ConnectWallet Component:
  - Provides a button to conncect the wallet.
- App Component:
 - Uses ThirdWeb React Library to interact with the smart contract.
 - Displays the current favorite number.
 - Allow users to input a new favorite number and update it through a button click.

 ### Usage:
 1. Conncect your wallet using the "ConnectWallet" button.
 2. The current favorite number is displayed on the screen.
 3. Input a new number in the provided field.
 4. Click the "Update: button to update the favorite number in the smart contract.

 ### Note: 
    Ensure you have a compatible wallet (e.g., MetaMask) installed and conncected to the Ethereum network.

#### License:
      This Project is licensed under the MIT License.