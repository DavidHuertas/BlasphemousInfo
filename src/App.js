import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import dialogs from './data/DialogLanguages.json';
import i2Items from './data/I2Languages.json';
import inventoryItems from './data/InventoryLanguages.json';

class App extends Component {

  state = {
    showItem: false,
    selectedLanguage: 0,
    selectedItem: 'Select a value',
    selectedDialog: 'Select a value',
    selectedI2: 'Select a value'
  };

  renderConsoleLog = () => {
    let terms = inventoryItems.MonoBehaviour.allTerms;
    let termsSplitted = terms.map(term => term.split("/")[0]);
    let entityTypes = new Set(termsSplitted);
    console.log(entityTypes);
    terms = dialogs.MonoBehaviour.allTerms;
    termsSplitted = terms.map(term => term.split("/")[0]);
    entityTypes = new Set(termsSplitted);
    console.log(entityTypes);
    terms = i2Items.MonoBehaviour.allTerms;
    termsSplitted = terms.map(term => term.split("/")[0]);
    entityTypes = new Set(termsSplitted);
    console.log(entityTypes);
  }

  getAllLanguages = () => {
    let languages = inventoryItems.MonoBehaviour.mLanguages;
    return languages.map(language => <option value={languages.indexOf(language)}>{language.Name}</option>)
  }

  getAllItemsAsOptions = () => {
    let itemIds = inventoryItems.MonoBehaviour.allTerms;
    return itemIds.map(itemId => <option value={itemId}>{itemId}</option>)
  }

  getItemDescription = () => {
    let itemDescription = inventoryItems.MonoBehaviour.mTerms.find(element => element.Term === this.state.selectedItem);
    return itemDescription === undefined ? null : itemDescription.Languages[this.state.selectedLanguage];
  }

  getAllDialogsAsOptions = () => {
    let dialogIds = dialogs.MonoBehaviour.allTerms;
    return dialogIds.map(dialogId => <option value={dialogId}>{dialogId}</option>)
  }

  getDialogDescription = () => {
    let dialogDescription = dialogs.MonoBehaviour.mTerms.find(element => element.Term === this.state.selectedDialog);
    return dialogDescription === undefined ? null : dialogDescription.Languages[this.state.selectedLanguage];
  }

  getAllI2AsOptions = () => {
    let i2Ids = i2Items.MonoBehaviour.allTerms;
    return i2Ids.map(i2Id => <option value={i2Id}>{i2Id}</option>)
  }

  getI2Description = () => {
    let i2Description = i2Items.MonoBehaviour.mTerms.find(element => element.Term === this.state.selectedI2);
    return i2Description === undefined ? null : i2Description.Languages[this.state.selectedLanguage];
  }

  handleLanguageSelectChange = (event) => {
    this.setState({selectedLanguage: event.target.value});
    console.log('selected language position: ' + this.state.selectedLanguage);
  }

  handleItemSelectChange = (event) => {
    this.setState({selectedItem: event.target.value});
    console.log('selected item: ' + this.state.selectedItem);
  }

  handleDialogSelectChange = (event) => {
    this.setState({selectedDialog: event.target.value});
    console.log('selected dialog: ' + this.state.selectedDialog);
  }

  handleI2SelectChange = (event) => {
    this.setState({selectedI2: event.target.value});
    console.log('selected i2: ' + this.state.selectedI2);
  }

  render() {
    this.renderConsoleLog();
    return (
      <div className="App">
        <h1>Blasphemous Info</h1>
        <select
          onChange={this.handleLanguageSelectChange}>
          {this.getAllLanguages()}
        </select>
        <div className="App-box">
        <h2>Items</h2>
        <select
          onChange={this.handleItemSelectChange}>
          {this.getAllItemsAsOptions()}
        </select>
        <p>
          {this.getItemDescription()}
        </p>
        </div>
        <div className="App-box">
        <h2>Dialogs</h2>
        <select
          onChange={this.handleDialogSelectChange}>
          {this.getAllDialogsAsOptions()}
        </select>
        <p>
          {this.getDialogDescription()}
        </p>
        </div>
        <div className="App-box">
        <h2>I2</h2>
        <select
          onChange={this.handleI2SelectChange}>
          {this.getAllI2AsOptions()}
        </select>
        <p>
          {this.getI2Description()}
        </p>
        </div>
      </div>
    );
  }
}

export default App;
