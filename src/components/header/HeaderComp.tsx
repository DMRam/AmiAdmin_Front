import React, { useState } from "react";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
  HeaderNavigation,
  HeaderMenu,
  SideNavMenuItem,
} from "@carbon/react";
import { Switcher, Notification, UserAvatar } from "@carbon/icons-react";

export const HeaderComp = () => {
  const [first, setfirst] = useState(false)
  const toggleTrue = () => {
    setfirst(!first)
  };

  return (
    <>
      {" "}
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <Header aria-label="Carbon">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              isCollapsible
              onClick={toggleTrue}
              isActive={isSideNavExpanded}
            />
            <HeaderName href="/" prefix="Helper">
              Carbon
            </HeaderName>
            <HeaderNavigation aria-label="IBM [Platform]">
              <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
              <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
              <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
              <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                <HeaderMenuItem isActive href="#">
                  Sub-link 2
                </HeaderMenuItem>
                <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
              </HeaderMenu>
            </HeaderNavigation>
            {first && (
              <SideNav
                aria-label="Side navigation"
                expanded={isSideNavExpanded}
                isPersistent={false}
              >
                <SideNav
                  style={{ backgroundColor: 'lightgrey' }}
                  aria-label="Side navigation"
                  isPersistent={true}
                // expanded={leftMenuVisibilitySmallDevices}
                >
                  <SideNavItems>
                    <SideNavMenuItem
                      // onClick={() => tabSelectionHandler("0")}
                      href="#"
                    >
                      About
                    </SideNavMenuItem>
                    <SideNavMenuItem
                      // onClick={() => tabSelectionHandler("1")}
                      href="#"
                    >
                      Services
                    </SideNavMenuItem>
                    <SideNavMenuItem
                      // onClick={() => tabSelectionHandler("2")}
                      href="#"
                    >
                      Contact
                    </SideNavMenuItem>
                  </SideNavItems>
                </SideNav>
              </SideNav>)
            }

            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="Notifications"
                tooltipAlignment="center"
              >
                <Notification size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="User Avatar"
                tooltipAlignment="center"
              >
                <UserAvatar size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="App Switcher"
                tooltipAlignment="end"
              >
                <Switcher size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
          </Header>
        )}
      />
    </>
  );
};
