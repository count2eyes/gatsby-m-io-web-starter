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
        <aside className="mdc-drawer mdc-drawer--dismissible mdc-top-app-bar--fixed-adjust ">
          <div className="mdc-drawer__content">
            <div className="mdc-list">
              <Link
                className="mdc-list-item mdc-list-item--activated"
                to=""
                aria-current="page"
              >
                <i
                  className="material-icons mdc-list-item__graphic"
                  aria-hidden="true"
                >
                  inbox
                </i>
                <span className="mdc-list-item__text">Inbox</span>
              </Link>
              <Link className="mdc-list-item" to="">
                <i
                  className="material-icons mdc-list-item__graphic"
                  aria-hidden="true"
                >
                  send
                </i>
                <span className="mdc-list-item__text">Outgoing</span>
              </Link>
              <Link className="mdc-list-item" to="">
                <i
                  className="material-icons mdc-list-item__graphic"
                  aria-hidden="true"
                >
                  drafts
                </i>
                <span className="mdc-list-item__text">Drafts</span>
              </Link>
            </div>
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
