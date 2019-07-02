import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { MDCTopAppBar } from "@material/top-app-bar/index"
import { MDCDrawer } from "@material/drawer/index"
import { MDCList } from "@material/list"

// Instantiation

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  setEventListener() {
    const topAppBar = MDCTopAppBar.attachTo(document.getElementById("app-bar"))
    const drawer = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"))

    const list = MDCList.attachTo(document.querySelector(".mdc-list"))
    list.wrapFocus = true

    topAppBar.setScrollTarget(document.getElementById("main-content"))
    topAppBar.listen("MDCTopAppBar:nav", () => {
      drawer.open = !drawer.open
    })
  }

  componentDidMount() {
    this.setEventListener()
  }

  render() {
    const { siteTitle } = this.props
    return (
      <React.Fragment>
        <header className="mdc-top-app-bar app-bar" id="app-bar">
          <div className="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <Link
                to=""
                className="demo-menu material-icons mdc-top-app-bar__navigation-icon"
              >
                menu
              </Link>
              <span className="mdc-top-app-bar__title">
                {siteTitle} Dismissible Drawer
              </span>
            </section>
            <section
              class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
              role="toolbar"
            >
              <a
                href="#"
                class="material-icons mdc-top-app-bar__action-item"
                aria-label="Download"
              >
                file_download
              </a>
              <a
                href="#"
                class="material-icons mdc-top-app-bar__action-item"
                aria-label="Print this page"
              >
                print
              </a>
              <a
                href="#"
                class="material-icons mdc-top-app-bar__action-item"
                aria-label="Bookmark this page"
              >
                bookmark
              </a>
            </section>
          </div>
        </header>
        <aside class="mdc-drawer mdc-drawer--modal">
          <div class="mdc-drawer__content">
            <nav class="mdc-list">
              <a
                class="mdc-list-item mdc-list-item--activated"
                href="#"
                aria-current="page"
              >
                <i
                  class="material-icons mdc-list-item__graphic"
                  aria-hidden="true"
                >
                  inbox
                </i>
                <span class="mdc-list-item__text">Inbox</span>
              </a>
              <a class="mdc-list-item" href="#">
                <i
                  class="material-icons mdc-list-item__graphic"
                  aria-hidden="true"
                >
                  send
                </i>
                <span class="mdc-list-item__text">Outgoing</span>
              </a>
              <a class="mdc-list-item" href="#">
                <i
                  class="material-icons mdc-list-item__graphic"
                  aria-hidden="true"
                >
                  drafts
                </i>
                <span class="mdc-list-item__text">Drafts</span>
              </a>
            </nav>
          </div>
        </aside>
      </React.Fragment>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Amazinea`,
}

export default Header
