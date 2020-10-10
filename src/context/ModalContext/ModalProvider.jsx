import React, { Component } from "react"
import ModalContext from "./ModalContext"; // index.js is default name

class ModalProvider extends Component {
  constructor(props) {
    super(props);
    
    this.toggleHamburger = this.toggleHamburger.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.toggleProfile = this.toggleProfile.bind(this);
    this.toggleCart = this.toggleCart.bind(this);

    this.state = {
      isHamburgerOpen: false,
      isSearchOpen: false,
      isProfileOpen: false,
      isCartOpen: false,
      toggleHamburger: this.toggleHamburger,
      toggleSearch: this.toggleSearch,
      toggleProfile: this.toggleProfile,
      toggleCart: this.toggleCart,
    }
  }

  toggleHamburger() {
    this.setState((state) => ({ ...state, isHamburgerOpen: !state.isHamburgerOpen }))
  }

  toggleSearch() {
    this.setState((state) => ({ ...state, isSearchOpen: !state.isSearchOpen }))
  }

  toggleProfile() {
    this.setState((state) => ({ ...state, isProfileOpen: !state.isProfileOpen }))
  }

  toggleCart() {
    this.setState((state) => ({ ...state, isCartOpen: !state.isCartOpen }))
  }

  render() {
    return (
      <ModalContext.Provider value={this.state}>
        {this.props.children}
      </ModalContext.Provider>
    )
  }
}

export default ModalProvider;
